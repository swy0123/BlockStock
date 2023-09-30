package com.olock.blockstotck.board.domain.tacticboard.persistance;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TacticPostLikeRepository extends JpaRepository<TacticPostLike, Long> {
    Optional<TacticPostLike> findByMemberIdAndTacticPostId(Long memberId, Long tacticPostId);
}
