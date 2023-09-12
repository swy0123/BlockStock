package com.olock.blockstock.gateway.domain.auth.persistence.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@RedisHash(value = "refresh_token", timeToLive =  60 * 24 * 60)
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RefreshToken {
    @Id
    String refreshToken;

    String email;
}
