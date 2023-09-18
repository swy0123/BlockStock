package com.olock.blockstock.member.global.error.dto;

public enum ErrorCode {
    WRONG_EMAIL(1001);

    private final int value;

    ErrorCode(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
