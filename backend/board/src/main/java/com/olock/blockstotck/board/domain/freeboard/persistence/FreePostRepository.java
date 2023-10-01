package com.olock.blockstotck.board.domain.freeboard.persistence;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FreePostRepository extends JpaRepository<FreePost, Long> {
    FreePost findById(long Id);
}
