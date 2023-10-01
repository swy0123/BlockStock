package com.olock.blockstotck.board.domain.freeboard.persistence;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePostComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FreePostCommentRepository extends JpaRepository<FreePostComment, Long> {
}
