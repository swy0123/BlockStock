package com.olock.blockstotck.board.domain.member.dto;

import lombok.Getter;

@Getter
public class MemberTopicMessage {
    private String message;
    private Long id;
    private String nickname;
    private Integer ticketCount;
    private Long money;
}
