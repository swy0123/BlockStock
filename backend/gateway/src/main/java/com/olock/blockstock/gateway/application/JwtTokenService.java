package com.olock.blockstock.gateway.application;

import com.olock.blockstock.gateway.dto.TokenDetails;
import com.olock.blockstock.gateway.dto.TokenValidationResult;
import com.olock.blockstock.gateway.exception.AuthException;
import com.olock.blockstock.gateway.exception.UnauthorizedException;
import com.olock.blockstock.gateway.persistence.MemberRepository;
import com.olock.blockstock.gateway.persistence.entity.Member;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.security.Key;
import java.util.Date;

@Component
public class JwtTokenService {
    @Value("${jwt.expiration}")
    private Integer expirationInMilliSeconds;

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    private final Key key;

    public JwtTokenService(@Value("${jwt.secret}") String secret, MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
    }

    private TokenDetails generateAccessToken(Member member) {
        System.out.println(member.getEmail() + " " + member.getId());
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + expirationInMilliSeconds);
        String subject = String.valueOf(member.getId());

        Claims claims = Jwts.claims().setSubject(subject);
        claims.put("role", member.getRole());
        claims.put("username", member.getEmail());

        String token = Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();

        return TokenDetails.builder()
                .memberId(member.getId())
                .token(token)
                .issuedAt(now)
                .expiresAt(expirationDate)
                .build();
    }

    public Mono<TokenDetails> authenticate(String email, String password) {
        Mono<Member> memberMono = memberRepository.findById(1L); // 1L은 검색하려는 노드의 ID입니다.

        memberMono.subscribe(member -> {
            // 노드를 찾았을 때 실행될 로직을 작성합니다.
            System.out.println("Found Member with ID: " + member.getId());
        }, error -> {
            // 오류 처리 로직을 작성합니다.
            System.err.println("Error: " + error.getMessage());
        });

        return memberRepository.findByEmail(email)
                .flatMap(member -> {
                    System.out.println(member.getId());
                            if (!passwordEncoder.matches(password, member.getPassword())) {
                                return Mono.error(new AuthException("잘못된 비밀번호", "PASSWORD_INCORRECT"));
                            }
                            TokenDetails tokenDetails = generateAccessToken(member);
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
            throw new AuthException("JWT token is invalid!", "TOKEN_INVALID");
        }

    }

    private Claims getClaimsJws(String token) {
        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
    }
}
