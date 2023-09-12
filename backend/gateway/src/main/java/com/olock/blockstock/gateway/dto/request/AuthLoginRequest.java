package com.olock.blockstock.gateway.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
public class AuthLoginRequest {
    private String email;
    private String password;
}
