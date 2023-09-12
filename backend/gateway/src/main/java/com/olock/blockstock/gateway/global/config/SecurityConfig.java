package com.olock.blockstock.gateway.global.config;

import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpMethod;
import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.authorization.ReactiveAuthorizationManager;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import reactor.core.publisher.Mono;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebFluxSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    @Bean
    public JwtAuthorizationPolicy jwtAuthorizationPolicy() {
        return new JwtAuthorizationPolicy("secret");
    }
    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        http
                .httpBasic(ServerHttpSecurity.HttpBasicSpec::disable)
                .cors(withDefaults())
                .csrf(ServerHttpSecurity.CsrfSpec::disable)
                .authorizeExchange((authorize) -> authorize
                        .pathMatchers("/api/auth/login").permitAll()
                        .pathMatchers(HttpMethod.GET, "/api/member/detail").permitAll()
                        .anyExchange().denyAll()
                )
                .authenticationManager(authenticationManager)
                .securityContextRepository(securityContextRepository);
        return http.build();
    }
}

class JwtAuthorizationPolicy implements AuthorizationPolicy {

    private final String secret;

    public JwtAuthorizationPolicy(String secret) {
        this.secret = secret;
    }

    @Override
    public Mono<AuthorizationDecision> check(Mono<Authentication> authentication, Mono<Resource> resource) {
        return authentication
                .cast(JwtAuthenticationToken.class)
                .flatMap(token -> {
                    String claims = token.getClaims();
                    return Mono.just(AuthorizationDecision.ALLOWED);
                });
    }
}
