package com.olock.blockstock.member.domain.award.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class ContestEndMessage {
    private String message;
    private Long contestId;
    private String contestTitle;
    private List<Long> memberIds;
    private List<Long> results;
}
