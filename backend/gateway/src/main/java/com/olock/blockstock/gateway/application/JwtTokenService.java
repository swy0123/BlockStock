package com.olock.blockstock.gateway.application;

import com.olock.blockstock.gateway.dto.TokenDetails;
import com.olock.blockstock.gateway.dto.TokenValidationResult;
import com.olock.blockstock.gateway.dto.request.AuthLoginRequest;
import com.olock.blockstock.gateway.dto.request.MemberJoinRequest;
import com.olock.blockstock.gateway.dto.response.AuthLoginResponse;
import com.olock.blockstock.gateway.exception.AuthException;
import com.olock.blockstock.gateway.exception.UnauthorizedException;
import com.olock.blockstock.gateway.persistence.MemberRepository;
import com.olock.blockstock.gateway.persistence.RefreshTokenRepository;
import com.olock.blockstock.gateway.persistence.entity.Member;
import com.olock.blockstock.gateway.persistence.entity.RefreshToken;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.apache.el.parser.Token;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.security.Key;
import java.sql.Ref;
import java.util.Date;
import java.util.Optional;

@Component
public class JwtTokenService {
    @Value("${jwt.expiration}")
    private Integer expirationInMilliSeconds;

    @Value("${jwt.expiration-refresh}")
    private Integer expirationRefreshInMilliSeconds;

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    private final Key key;

    private final RefreshTokenRepository refreshTokenRepository;

    public JwtTokenService(@Value("${jwt.secret}") String secret, MemberRepository memberRepository, PasswordEncoder passwordEncoder, RefreshTokenRepository refreshTokenRepository) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
        this.refreshTokenRepository = refreshTokenRepository;
    }

    public Mono<AuthLoginResponse> login(AuthLoginRequest authLoginRequest) {
        return authenticate(authLoginRequest.getEmail(), authLoginRequest.getPassword())
                .flatMap(tokenDetails -> Mono.just(
                        AuthLoginResponse.builder()
                                .nickname(tokenDetails.getNickname())
                                .memberId(tokenDetails.getMemberId())
                                .accessToken(tokenDetails.getAccessToken())
                                .refreshToken(tokenDetails.getRefreshToken())
                                .build()
                ));
    }

    public Mono<AuthLoginResponse> refresh(String refreshToken) {
        Optional<RefreshToken> refreshTokenEntity = refreshTokenRepository.findById(refreshToken);
        if (refreshTokenEntity.isEmpty()) {
            return Mono.error(new AuthException("잘못된 토큰", "INVALID_TOKEN"));
        }

        Mono<Member> memberMono = memberRepository.findByEmail(refreshTokenEntity.get().getEmail());
        memberMono.subscribe(member -> {
            System.out.println("Found Member with ID: " + member.getId());
        }, error -> {
            System.err.println("Error: " + error.getMessage());
        });

        refreshTokenRepository.deleteById(refreshToken);
        return memberRepository.findByEmail(refreshTokenEntity.get().getEmail())
                .flatMap(member -> {
                            return Mono.just(new AuthLoginResponse(generateTokenDetail(member)));
                        }
                ).switchIfEmpty(Mono.error(new AuthException("잘못된 이메일", "INVALID_USERNAME")));
    }

    public void logout(String refreshToken) {
        refreshTokenRepository.deleteById(refreshToken);
    }

    private TokenDetails generateTokenDetail(Member member) {
        return TokenDetails.builder()
                .nickname(member.getNickname())
                .memberId(member.getId())
                .accessToken(generateAccessToken(member))
                .refreshToken(generateRefreshToken(member))
                .build();
    }

    private String generateAccessToken(Member member) {
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + expirationInMilliSeconds);
        String subject = String.valueOf(member.getId());

        Claims claims = Jwts.claims().setSubject(subject);
        claims.put("role", member.getRole());
        claims.put("username", member.getEmail());

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    private String generateRefreshToken(Member member) {
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + expirationRefreshInMilliSeconds);
        String subject = String.valueOf(member.getId());

        Claims claims = Jwts.claims().setSubject(subject);
        claims.put("role", member.getRole());

        String refreshToken = Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();

        refreshTokenRepository.save(new RefreshToken(refreshToken, member.getEmail()));

        return refreshToken;
    }

    private Mono<TokenDetails> authenticate(String email, String password) {
        Mono<Member> memberMono = memberRepository.findByEmail(email);

        memberMono.subscribe(member -> {
            System.out.println("Found Member with ID: " + member.getId());
        }, error -> {
            System.err.println("Error: " + error.getMessage());
        });

        return memberRepository.findByEmail(email)
                .flatMap(member -> {
                            if (!passwordEncoder.matches(password, member.getPassword())) {
                                return Mono.error(new AuthException("잘못된 비밀번호", "PASSWORD_INCORRECT"));
                            }
                            TokenDetails tokenDetails = generateTokenDetail(member);
                            return Mono.just(tokenDetails);
                        }
                ).switchIfEmpty(Mono.error(new AuthException("잘못된 이메일", "INVALID_USERNAME")));
    }

    public Mono<TokenValidationResult> validateToken(String token) {
        try {
            Claims claims = getClaimsJws(token);

            if (claims.getExpiration().before(new Date())) {
                throw new RuntimeException("JWT token is expired!");
            }

            TokenValidationResult tokenValidationResult = new TokenValidationResult(claims, token);

            return Mono.just(tokenValidationResult)
                    .onErrorResume(ex -> Mono.error(new UnauthorizedException("User unauthorized!")));

        } catch (JwtException | IllegalArgumentException e) {
            System.out.println(e.getMessage());
            throw new AuthException("JWT token is invalid!", "TOKEN_INVALID");
        }

    }

    private Claims getClaimsJws(String token) {
        Claims c = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
    }
}
