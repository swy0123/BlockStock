package com.olock.blockstotck.board.domain.tacticboard.persistance;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TacticPostCommentRepository extends JpaRepository<TacticPostComment, Long> {
}
