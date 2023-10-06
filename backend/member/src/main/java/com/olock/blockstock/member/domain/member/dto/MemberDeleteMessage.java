package com.olock.blockstock.member.domain.member.dto;

import lombok.Getter;

@Getter
public class MemberDeleteMessage {
    private String message = MessageType.DELETE.getKey();
    private Long memberId;

    public MemberDeleteMessage(Long memberId) {
        this.memberId = memberId;
    }

}
