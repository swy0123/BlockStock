package com.olock.blockstock.member.domain.message.dto.response;

import com.olock.blockstock.member.domain.message.persistance.entity.Message;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class MessageDetailResponse {
    private String id;
    private Long senderId;
    private Long receiverId;
    private String  content;
    private boolean isMarked;
    private LocalDateTime createdAt;

    public MessageDetailResponse(Message message) {
        this.id = message.getId();
        this.senderId = message.getSenderId();
        this.receiverId = message.getReceiverId();
        this.content = message.getContent();
        this.isMarked = message.isMarked();
        this.createdAt = message.getCreatedAt();
    }
}
