package com.olock.blockstotck.board.domain.tacticboard.persistance;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TacticPostCommentRepository extends JpaRepository<TacticPostComment, Long> {
    List<TacticPostComment> findByTacticPostId(Long tacticPostId);

    Optional<TacticPostComment> findByIdAndMemberId(Long commentId, Long memberId);
}
