package com.olock.blockstock.member.domain.message.application;

import com.olock.blockstock.member.domain.message.dto.request.MessageSendRequest;
import com.olock.blockstock.member.domain.message.dto.response.MessageDetailResponse;
import com.olock.blockstock.member.domain.message.persistance.MessageRepository;
import com.olock.blockstock.member.domain.message.persistance.entity.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {
    private final MessageRepository messageRepository;

    @Override
    public void sendMessage(Long memberId, MessageSendRequest messageSendRequest) {
        messageRepository.save(new Message(memberId, messageSendRequest.getReceiverId(), messageSendRequest.getContent()));
    }

    @Override
    public void markMessage(Long memberId, String messageId) {
        messageRepository.toggleIsMarkedById(messageId);
    }

    @Override
    public List<MessageDetailResponse> getMyMessages(Long memberId, String type) {
        System.out.println("=====");
        return messageRepository.findMessagesBySenderId(memberId);
    }

    @Override
    public MessageDetailResponse getMessage(String messageId) {
        return null;
    }

    @Override
    public void deleteMessage(String messageId) {

    }
}
