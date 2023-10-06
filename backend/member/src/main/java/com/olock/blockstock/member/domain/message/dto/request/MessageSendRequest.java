package com.olock.blockstock.member.domain.message.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class MessageSendRequest {
    private Long receiverId;
    private String content;
}
