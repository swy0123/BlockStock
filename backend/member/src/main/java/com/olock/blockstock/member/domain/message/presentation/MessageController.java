package com.olock.blockstock.member.domain.message.presentation;

import com.olock.blockstock.member.domain.message.dto.request.MessageSendRequest;
import com.olock.blockstock.member.domain.message.persistance.MessageRepository;
import com.olock.blockstock.member.domain.message.persistance.entity.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/message")
@RequiredArgsConstructor
public class MessageController {

    private final MessageRepository messageRepository;

    @PostMapping("")
    public ResponseEntity<Void> sendMessage(@RequestHeader("Member-id") Long memberId, @RequestBody MessageSendRequest messageSendRequest) {
        messageRepository.save(new Message(memberId,messageSendRequest.getReceiverId(), messageSendRequest.getContent()));

        return ResponseEntity.ok().build();
    }
}
