package com.olock.blockstock.member.domain.message.application;

import com.olock.blockstock.member.domain.message.dto.request.MessageSendRequest;
import com.olock.blockstock.member.domain.message.dto.response.MessageDetailResponse;
import com.olock.blockstock.member.domain.message.persistance.MessageRepository;
import com.olock.blockstock.member.domain.message.persistance.entity.Message;
import com.olock.blockstock.member.domain.message.persistance.entity.MessageType;
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
        boolean nextMark = !messageRepository.findById(messageId).get().isMarked();
        messageRepository.updateIsMarked(messageId, nextMark);
    }

    @Override
    public List<MessageDetailResponse> getMyMessages(Long memberId, String type) {
        if (type.equals(MessageType.RECEIVE.getKey())) return messageRepository.findMessagesByReceiverId(memberId);
        if (type.equals(MessageType.SEND.getKey())) return messageRepository.findMessagesBySenderId(memberId);
        return messageRepository.findMessagesByReceiverIdAndIsMarked(memberId, true);
    }

    @Override
    public MessageDetailResponse getMessage(String messageId) {
        return new MessageDetailResponse(messageRepository.findById(messageId).get());
    }

    @Override
    public void deleteMessage(List<String> messageIds) {
        messageRepository.deleteAllById(messageIds);
    }
}
