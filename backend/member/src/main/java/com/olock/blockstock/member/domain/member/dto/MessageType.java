package com.olock.blockstock.member.domain.member.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MessageType {
    DELETE("MEMBER_DELETE"), UPDATE("MEMBER_UPDATE");

    private final String key;
}
