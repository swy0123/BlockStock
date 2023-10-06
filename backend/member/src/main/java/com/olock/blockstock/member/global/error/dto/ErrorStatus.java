package com.olock.blockstock.member.global.error.dto;

public enum ErrorStatus {
    INVALID_REQUEST(400);

    private final int value;

    ErrorStatus(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}