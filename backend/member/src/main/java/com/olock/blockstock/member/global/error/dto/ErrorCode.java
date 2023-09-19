package com.olock.blockstock.member.global.error.dto;

public enum ErrorCode {
    WRONG_EMAIL(1001),
    WRONG_CONFIRM(1002);

    private final int value;

    ErrorCode(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
