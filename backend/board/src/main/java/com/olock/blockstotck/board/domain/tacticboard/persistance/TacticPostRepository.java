package com.olock.blockstotck.board.domain.tacticboard.persistance;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TacticPostRepository extends JpaRepository<TacticPost, Long> {
    @Query(value = "UPDATE TacticPost t set t.hit = t.hit + 1 WHERE t.id = :tacticPostId")
    void updateHit(Long tacticPostId);
}
