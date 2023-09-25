package com.olock.blockstock.member.domain.message.application;

import com.olock.blockstock.member.domain.message.dto.request.MessageSendRequest;
import com.olock.blockstock.member.domain.message.dto.response.MessageDetailResponse;

import java.util.List;

public interface MessageService {
    void sendMessage(Long MemberId, MessageSendRequest messageSendRequest);

    void markMessage(Long memberId, String messageId);

    List<MessageDetailResponse> getMyMessages(Long memberId, String type);

    MessageDetailResponse getMessage(String messageId);

    void deleteMessage(List<String> messageIds);
}
