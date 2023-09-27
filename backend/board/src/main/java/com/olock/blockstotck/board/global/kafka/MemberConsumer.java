package com.olock.blockstotck.board.global.kafka;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.olock.blockstotck.board.domain.member.application.MemberService;
import com.olock.blockstotck.board.domain.member.dto.MemberTopicMessage;
import com.olock.blockstotck.board.domain.member.persistance.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class MemberConsumer {
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final MemberService memberService;
    @KafkaListener(topics = "member-topic", groupId = "board-consumer")
    public void consumeMemberTopic(String message){
        try {
            MemberTopicMessage memberTopicMessage = objectMapper.readValue(message, MemberTopicMessage.class);
            memberService.updateMember(memberTopicMessage);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
