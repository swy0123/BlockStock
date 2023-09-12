package com.olock.blockstock.gateway.dto.request;

import lombok.Getter;

@Getter
public class MemberJoinRequest {
    private String email;
    private String password;
    private String nickname;
    private String imagePath;
}
