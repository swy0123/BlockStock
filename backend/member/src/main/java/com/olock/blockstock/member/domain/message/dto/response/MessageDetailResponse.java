package com.olock.blockstock.member.domain.message.dto.response;

import com.olock.blockstock.member.domain.message.persistance.entity.Message;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class MessageDetailResponse {
    private String id;
    private Long senderId;
    private String senderNickname;
    private Long receiverId;
    private String receiverNickname;
    private String  content;
    private boolean isMarked;
    private LocalDateTime createdAt;

    public MessageDetailResponse(Message message, boolean isSender) {
        this.id = message.getId();
        this.senderId = message.getSenderId();
        this.receiverId = message.getReceiverId();
        this.content = message.getContent();
        this.isMarked = isSender? message.isSenderMarked() : message.isReceiverMarked();
        this.createdAt = message.getCreatedAt();
    }
}
