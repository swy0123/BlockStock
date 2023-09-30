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
    @Update("{'$set': {'isSenderMarked': ?1}}")
    Integer updateIsSenderMarked(String id, boolean isSenderMarked);

    @Query("{'_id' : ?0}")
    @Update("{'$set': {'isReceiverMarked': ?1}}")
    Integer updateIsReceiverMarked(String id, boolean isReceiverMarked);

    @Query("{'senderId': ?0, 'isSenderDeleted': false}")
    List<Message> findBySenderIdAndIsSenderDeletedFalse(Long memberId);

    @Query("{'receiverId': ?0, 'isReceiverDeleted': false}")
    List<Message> findByReceiverIdAndIsReceiverDeletedFalse(Long memberId);

    @Query("{'$or':[ {'receiverId': ?0, 'isReceiverMarked': true}, {'senderId': ?0, 'isSenderMarked': true}]}")
    List<Message> findMessagesByIsMarked(Long memberId);

    @Query("{'_id': {$in : ?0}, '$or': [{'receiverId': ?1}, {'senderId': ?1}]}")
    @Update("{'$set': {'isReceiverDeleted': {'$cond': [{'$eq': ['$receiverId', ?1]}, true, '$isReceiverDeleted']}, 'isSenderDeleted': {'$cond': [{'$eq': ['$senderId', ?1]}, true, '$isSenderDeleted']}}}")
    void deleteMessageByIdAndMemberId(Long memberId, List<String> messageIds);
}