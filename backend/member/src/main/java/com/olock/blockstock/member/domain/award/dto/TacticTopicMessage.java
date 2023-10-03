package com.olock.blockstock.member.domain.award.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class TacticTopicMessage {
    private String message;
    private List<Long> memberIds;
    private List<Long> results;
}
