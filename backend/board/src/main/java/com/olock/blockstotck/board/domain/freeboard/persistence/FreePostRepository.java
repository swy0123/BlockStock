package com.olock.blockstotck.board.domain.freeboard.persistence;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface FreePostRepository extends JpaRepository<FreePost, Long>, JpaSpecificationExecutor<FreePost> {
    FreePost findById(long Id);

    @Modifying
    @Query("UPDATE FreePost p SET p.hit = p.hit + 1 WHERE p.id = :freePostId")
    void updateHit(@Param("freePostId") Long freePostId);
}
