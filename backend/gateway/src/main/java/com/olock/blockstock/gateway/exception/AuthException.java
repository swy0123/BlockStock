package com.olock.blockstock.gateway.exception;

import lombok.Getter;
import org.springframework.security.core.AuthenticationException;

public class AuthException extends AuthenticationException {
    @Getter
    protected String errorCode;

    public AuthException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }
}
