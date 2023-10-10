package com.olock.blockstock.member.domain.award.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class ContestParticipateMessage {
    private String message;
    private Long memberId;
    private Long contestId;
    private Integer ticketCnt;
}
