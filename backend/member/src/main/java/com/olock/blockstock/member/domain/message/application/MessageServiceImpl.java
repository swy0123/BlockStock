package com.olock.blockstock.member.domain.message.application;

import com.olock.blockstock.member.domain.member.persistence.MemberRepository;
import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import com.olock.blockstock.member.domain.message.dto.request.MessageSendRequest;
import com.olock.blockstock.member.domain.message.dto.response.MessageDetailResponse;
import com.olock.blockstock.member.domain.message.persistance.MessageRepository;
import com.olock.blockstock.member.domain.message.persistance.entity.Message;
import com.olock.blockstock.member.domain.message.persistance.entity.MessageType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {
    private final MessageRepository messageRepository;
    private final MemberRepository memberRepository;

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
        List<Message> msgs;
        if (type.equals(MessageType.RECEIVE.getKey())) msgs = messageRepository.findMessagesByReceiverId(memberId);
        else if (type.equals(MessageType.SEND.getKey())) msgs = messageRepository.findMessagesBySenderId(memberId);
        else msgs = messageRepository.findMessagesByReceiverIdAndIsMarked(memberId, true);

        return getMessageDetails(msgs);
    }

    @Override
    public MessageDetailResponse getMessage(String messageId) {
        MessageDetailResponse detail = new MessageDetailResponse(messageRepository.findById(messageId).get());
        detail.setReceiverNickname(memberRepository.findByMemberId(detail.getReceiverId()).get().getNickname());
        detail.setSenderNickname(memberRepository.findByMemberId(detail.getSenderId()).get().getNickname());
        return detail;
    }

    @Override
    public void deleteMessage(List<String> messageIds) {
        messageRepository.deleteAllById(messageIds);
    }

    private List<MessageDetailResponse> getMessageDetails(List<Message> msgs) {
        List<MessageDetailResponse> details = new ArrayList<>();
        for (Message msg : msgs) {
            MessageDetailResponse detail = new MessageDetailResponse(msg);
            detail.setReceiverNickname(memberRepository.findByMemberId(msg.getReceiverId()).get().getNickname());
            detail.setSenderNickname(memberRepository.findByMemberId(msg.getSenderId()).get().getNickname());
            details.add(detail);
        }
        return details;
    }
}
