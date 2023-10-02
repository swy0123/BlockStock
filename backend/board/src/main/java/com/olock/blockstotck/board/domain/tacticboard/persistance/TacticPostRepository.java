package com.olock.blockstotck.board.domain.tacticboard.persistance;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TacticPostRepository extends JpaRepository<TacticPost, Long>, JpaSpecificationExecutor<TacticPost> {
    @Modifying
    @Query("UPDATE TacticPost t set t.hit = t.hit + 1 WHERE t.id = :tacticPostId")
    void updateHit(Long tacticPostId);

    Page<TacticPost> findByMemberId(Long userId, Pageable pageable);
}
