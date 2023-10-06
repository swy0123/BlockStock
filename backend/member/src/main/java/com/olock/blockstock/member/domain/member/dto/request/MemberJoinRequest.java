package com.olock.blockstock.member.domain.member.dto.request;

import lombok.Getter;
import lombok.ToString;

@Getter
public class MemberJoinRequest {
    private String email;
    private String password;
    private String nickname;
}

