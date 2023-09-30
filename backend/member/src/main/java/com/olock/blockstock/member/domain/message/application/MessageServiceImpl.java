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
import java.util.Objects;
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
        Message message = messageRepository.findById(messageId).get();
        boolean isSender = checkIsSender(memberId, message);

        if (isSender) messageRepository.updateIsSenderMarked(messageId, !message.isSenderMarked());
        else messageRepository.updateIsReceiverMarked(messageId, !message.isReceiverMarked());
    }

    @Override
    public List<MessageDetailResponse> getMyMessages(Long memberId, String type) {
        List<Message> msgs;
        if (type.equals(MessageType.SEND.getKey())) {
            msgs = messageRepository.findBySenderIdAndIsSenderDeletedFalse(memberId);
            return getMessageDetails(true, msgs);
        }

        else if (type.equals(MessageType.RECEIVE.getKey())) {
            msgs = messageRepository.findByReceiverIdAndIsReceiverDeletedFalse(memberId);
            return getMessageDetails(false, msgs);
        }

        msgs = messageRepository.findMessagesByIsMarked(memberId);
        return getMessageDetails(memberId, msgs);
    }

    @Override
    public MessageDetailResponse getMessage(Long memberId, String messageId) {
        Message message = messageRepository.findById(messageId).get();
        boolean isSender = checkIsSender(memberId, message);
        MessageDetailResponse detail = new MessageDetailResponse(messageRepository.findById(messageId).get(), isSender);
        detail.setReceiverNickname(memberRepository.findByMemberId(detail.getReceiverId()).get().getNickname());
        detail.setSenderNickname(memberRepository.findByMemberId(detail.getSenderId()).get().getNickname());
        return detail;
    }

    @Override
    public void deleteMessage(Long memberId, List<String> messageIds) {
        messageRepository.deleteMessageByIdAndMemberId(memberId, messageIds);
    }

    private boolean checkIsSender(Long memberId, Message message) {
        return message.getSenderId().equals(memberId);
    }

    private List<MessageDetailResponse> getMessageDetails(boolean isSender, List<Message> msgs) {
        List<MessageDetailResponse> details = new ArrayList<>();
        for (Message msg : msgs) {
            MessageDetailResponse detail = new MessageDetailResponse(msg, isSender);
            detail.setReceiverNickname(memberRepository.findByMemberId(msg.getReceiverId()).get().getNickname());
            detail.setSenderNickname(memberRepository.findByMemberId(msg.getSenderId()).get().getNickname());
            details.add(detail);
        }
        return details;
    }


    private List<MessageDetailResponse> getMessageDetails(Long memberId, List<Message> msgs) {
        List<MessageDetailResponse> details = new ArrayList<>();
        for (Message msg : msgs) {
            boolean isSender = checkIsSender(memberId, msg);
            MessageDetailResponse detail = new MessageDetailResponse(msg, isSender);
            detail.setReceiverNickname(memberRepository.findByMemberId(msg.getReceiverId()).get().getNickname());
            detail.setSenderNickname(memberRepository.findByMemberId(msg.getSenderId()).get().getNickname());
            details.add(detail);
        }
        return details;
    }
}
