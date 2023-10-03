package com.olock.blockstotck.board.domain.freeboard.persistence;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePostLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FreePostLikeRepository extends JpaRepository<FreePostLike, Long> {
    void deleteAllByFreePostId(Long freePostId);

    Optional<FreePostLike> findByMemberIdAndFreePostId(Long memberId, Long freePostId);

    long countByFreePostId(Long freePostId);
}
