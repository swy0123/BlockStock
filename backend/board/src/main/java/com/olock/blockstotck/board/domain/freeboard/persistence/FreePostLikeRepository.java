package com.olock.blockstotck.board.domain.freeboard.persistence;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePostLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FreePostLikeRepository extends JpaRepository<FreePostLike, Long> {
    void deleteAllByFreePostId(Long freePostId);
}
