package com.olock.blockstock.member.domain.message.presentation;

import com.olock.blockstock.member.domain.message.application.MessageService;
import com.olock.blockstock.member.domain.message.dto.request.MessageSendRequest;
import com.olock.blockstock.member.domain.message.dto.response.MessageDetailResponse;
import com.olock.blockstock.member.domain.message.persistance.MessageRepository;
import com.olock.blockstock.member.domain.message.persistance.entity.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/message")
@RequiredArgsConstructor
public class MessageController {

    private final MessageService messageService;

    @PostMapping
    public ResponseEntity<Void> sendMessage(@RequestHeader("Member-id") Long memberId, @RequestBody MessageSendRequest messageSendRequest) {
        messageService.sendMessage(memberId, messageSendRequest);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{messageId}")
    public ResponseEntity<Void> mark(@RequestHeader("Member-id") Long memberId, @PathVariable("messageId") Long messageId) {
        messageService.markMessage(memberId, messageId);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<MessageDetailResponse>> getMyMessages(@RequestHeader("Member-id") Long memberId, @PathVariable("type") String type) {
        return ResponseEntity.ok(messageService.getMyMessages(memberId, type));
    }

    @GetMapping("/{messageId}")
    public ResponseEntity<MessageDetailResponse> getMessages(@PathVariable("messageId") Long messageId) {
        return ResponseEntity.ok(messageService.getMessage(messageId));
    }

    @DeleteMapping("/{messageId}")
    public ResponseEntity<MessageDetailResponse> deleteMessage(@PathVariable("messageId") Long messageId) {
        messageService.deleteMessage(messageId);
        return ResponseEntity.ok().build();
    }
}
