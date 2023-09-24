package com.olock.blockstock.member.domain.message.persistance;

import com.olock.blockstock.member.domain.message.persistance.entity.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface MessageRepository extends MongoRepository<Message, String> {
    List<Message> findBySenderId(String senderId);
    List<Message> findByReceiverId(String receiverId);
}