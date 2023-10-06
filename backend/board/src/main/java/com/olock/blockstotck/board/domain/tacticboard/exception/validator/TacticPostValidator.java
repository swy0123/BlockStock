package com.olock.blockstotck.board.domain.tacticboard.exception.validator;

import com.olock.blockstotck.board.domain.tacticboard.exception.AlreadyLikeTacticPost;
import com.olock.blockstotck.board.domain.tacticboard.exception.AlreadyUnLikeTacticPost;
import com.olock.blockstotck.board.domain.tacticboard.exception.NoExistTacticPost;
import com.olock.blockstotck.board.domain.tacticboard.exception.NoMatchingWriter;
import com.olock.blockstotck.board.domain.tacticboard.persistance.TacticPostRepository;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostLike;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class TacticPostValidator {

    public void checkAlreadyLike(Optional<TacticPostLike> existTacticPostLike) {
        if(existTacticPostLike.isPresent()) throw new AlreadyLikeTacticPost("이미 게시글에 좋아요를 했습니다.");
    }

    public void checkAlreadyUnLike(Optional<TacticPostLike> tacticPostLike) {
        if(tacticPostLike.isEmpty()) throw new AlreadyUnLikeTacticPost("이미 게시글 좋아요를 하지 않습니다.");
    }

    public void checkTacticPostWriter(TacticPost tacticPost, Long memberId) {
        if(tacticPost.getMemberId() != memberId) throw new NoMatchingWriter("해당 게시글 작성자가 아닙니다.");
    }

    public void checkTacticPostExist(TacticPostRepository tacticPostRepository, Long tacticPostId) {
        if(!tacticPostRepository.existsById(tacticPostId)) throw new NoExistTacticPost("해당하는 게시글이 없습니다.");
    }
}
