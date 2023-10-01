package com.olock.blockstock.member.infra.kakaopay.service;

import com.olock.blockstock.member.global.config.WebClientConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class KakaoClientUtil {
    @Value("${kakao.key}")
    private String ADMIN_KEY;

    private final WebClientConfig webClientConfig;

    public <T> T get(String url, Long memberId, Class<T> responseDtoClass) {
        return webClientConfig.webClient().method(HttpMethod.GET)
                .uri(url)
                .header("Authorization", "KakaoAK " + ADMIN_KEY)
                .header("Content-type", "application/x-www-form-urlencoded;charset=utf-8")
                .header("Member-id", String.valueOf(memberId))
                .retrieve()
                .bodyToMono(responseDtoClass)
                .block();
    }

    public <T, V> T post(String url, V requestDto, Class<T> responseDtoClass) {
        return webClientConfig.webClient().method(HttpMethod.POST)
                .uri(url)
                .header("Authorization", "KakaoAK " + ADMIN_KEY)
                .header("Content-type", "application/x-www-form-urlencoded;charset=utf-8")
                .bodyValue(requestDto)
                .retrieve()
                .bodyToMono(responseDtoClass)
                .block();
    }
}

