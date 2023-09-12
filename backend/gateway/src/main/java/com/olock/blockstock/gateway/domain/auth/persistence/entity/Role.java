package com.olock.blockstock.gateway.domain.auth.persistence.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Role {
    ADMIN("ROLE_ADMIN"), MEMBER("ROLE_MEMBER");

    private final String key;
}

