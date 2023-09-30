package com.olock.blockstotck.board.domain.tacticboard.persistance;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TacticPostLikeRepository extends JpaRepository<TacticPostLike, Long> {
}
