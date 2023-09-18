package com.olock.blockstock.member.domain.member.dto.request;

import lombok.Getter;

@Getter
public class EmailConfirmRequest {
    private String email;
    private String code;
}
