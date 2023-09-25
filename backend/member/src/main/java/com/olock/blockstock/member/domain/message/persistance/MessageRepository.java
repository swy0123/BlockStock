package com.olock.blockstock.member.domain.message.persistance;

import com.olock.blockstock.member.domain.message.dto.response.MessageDetailResponse;
import com.olock.blockstock.member.domain.message.persistance.entity.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface MessageRepository extends MongoRepository<Message, String> {

    @Query("{'_id' : ?0}")
    @Update("{'$set': {'isMarked': ?1}}")
    Integer updateIsMarked(String id, boolean isMarked);

    @Query("{'senderId': ?0}")
    List<Message> findMessagesBySenderId(Long memberId);

    @Query("{'receiverId': ?0}")
    List<Message> findMessagesByReceiverId(Long memberId);

    @Query("{'receiverId': ?0, 'isMarked': ?1}")
    List<Message> findMessagesByReceiverIdAndIsMarked(Long memberId, boolean isMarked);

}