package com.olock.blockstock.gateway.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.UNAUTHORIZED)
public class UnauthorizedException extends AuthException {

    public UnauthorizedException(String message) {
        super(message, "UNAUTHORIZED");
    }
}