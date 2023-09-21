package com.olock.blockstock.member.domain.member.exception;

public class LessMoneyException extends RuntimeException {
    public LessMoneyException(String message) {
        super(message);
    }

    public LessMoneyException(String message, Throwable cause) {
        super(message, cause);
    }
}
