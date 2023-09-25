package com.olock.blockstock.member.domain.message.dto.response;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class MessageDetailResponse {
    private Long id;
    private Long senderId;
    private Long receiverId;
    private String  content;
    private LocalDateTime createdAt;
}
