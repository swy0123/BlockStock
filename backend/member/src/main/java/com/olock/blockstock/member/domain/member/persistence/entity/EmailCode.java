package com.olock.blockstock.member.domain.member.persistence.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@RedisHash(value = "email_code", timeToLive =  600)
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class EmailCode {
    @Id
    String email;
    String code;
}
