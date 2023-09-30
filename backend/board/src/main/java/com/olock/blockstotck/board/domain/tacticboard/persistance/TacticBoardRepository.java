package com.olock.blockstotck.board.domain.tacticboard.persistance;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TacticBoardRepository extends JpaRepository<TacticPost, Long> {

}
