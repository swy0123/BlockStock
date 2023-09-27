package com.olock.blockstotck.board.global.kafka;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class MemberConsumer {

    @KafkaListener(topics = "member-topic", groupId = "group-consumer")
    public void consumeMyopic1(@Payload String message){
        System.out.println("============================");
        System.out.println(message);
    }
}
