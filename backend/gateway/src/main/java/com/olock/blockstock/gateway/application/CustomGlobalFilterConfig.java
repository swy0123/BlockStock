package com.olock.blockstock.gateway.application;

import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.server.reactive.ServerHttpRequest;

@Configuration
public class CustomGlobalFilterConfig {

    @Bean
    public GlobalFilter customGlobalFilter() {
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();

            if (!isPublicRequest(request)) {
                exchange.getRequest().mutate()
                        .header("Member-id", "8")
                        .build();
            }

            return chain.filter(exchange);
        };
    }

    private boolean isPublicRequest(ServerHttpRequest request) {
        return (request.getMethod() == HttpMethod.POST && "/api/member".equals(request.getURI().getPath()))
                || "/api/auth/login".equals(request.getURI().getPath());
    }
}