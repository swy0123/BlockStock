package com.olock.blockstotck.board.domain.freeboard.persistence;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePostComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FreePostCommentRepository extends JpaRepository<FreePostComment, Long> {
    void deleteAllByFreePostId(Long freePostId);

    List<FreePostComment> findAllByFreePostId(Long freePostId);
}
