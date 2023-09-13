package com.olock.blockstock.member.domain.member.dto.response;

import lombok.Setter;

import java.time.LocalDateTime;

@Setter
public class MemberInfoResponse {
    private Long id;
    private String email;
    private String nickname;
    private Long money;
    private LocalDateTime createdAt;
}
