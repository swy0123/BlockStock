package com.olock.blockstock.member.domain.message.persistance.entity;

import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Document(collection = "message")
@ToString
public class Message {
    @Id
    private String id;
    private Long senderId;
    private Long receiverId;
    private String content;
    private boolean isRead;
    private boolean isSenderMarked;
    private boolean isReceiverMarked;
    private boolean isSenderDeleted;
    private boolean isReceiverDeleted;
    private LocalDateTime createdAt;

    public Message(Long senderId, Long receiverId, String content) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.content = content;
        this.createdAt = LocalDateTime.now();
    }
}
