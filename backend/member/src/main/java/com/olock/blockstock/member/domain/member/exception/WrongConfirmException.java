package com.olock.blockstock.member.domain.member.exception;

public class WrongConfirmException extends RuntimeException {
    public WrongConfirmException(String message) {
        super(message);
    }

    public WrongConfirmException(String message, Throwable cause) {
        super(message, cause);
    }
}
