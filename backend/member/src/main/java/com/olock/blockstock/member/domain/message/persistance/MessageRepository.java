package com.olock.blockstock.member.domain.message.persistance;

import com.olock.blockstock.member.domain.message.dto.response.MessageDetailResponse;
import com.olock.blockstock.member.domain.message.persistance.entity.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface MessageRepository extends MongoRepository<Message, String> {
    List<Message> findBySenderId(String senderId);
    List<Message> findByReceiverId(String receiverId);

    @Query("{'_id': ?0}")
    void toggleIsMarkedById(String id);

    @Query("{'senderId': ?0}")
    List<MessageDetailResponse> findMessagesBySenderId(Long memberId);

    @Query("{'receiverId': ?0}")
    List<MessageDetailResponse> findMessagesByReceiverId(Long memberId);


    @Query("{'isMarked': ?0}")
    List<MessageDetailResponse> findMessagesByReceiverIdAndIsMarked();

}