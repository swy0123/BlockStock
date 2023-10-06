package com.olock.blockstock.member.domain.member.exception;

public class WrongTokenException extends RuntimeException {
    public WrongTokenException(String message) {
        super(message);
    }

    public WrongTokenException(String message, Throwable cause) {
        super(message, cause);
    }
}
