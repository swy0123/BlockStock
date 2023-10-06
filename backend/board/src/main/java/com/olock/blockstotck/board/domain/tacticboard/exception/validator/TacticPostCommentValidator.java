package com.olock.blockstotck.board.domain.tacticboard.exception.validator;

import com.olock.blockstotck.board.domain.tacticboard.exception.NoExistTacticPostComment;
import com.olock.blockstotck.board.domain.tacticboard.exception.NoMatchingWriter;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostComment;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class TacticPostCommentValidator {
    public void checkTacticPostCommentExist(Optional<TacticPostComment> findTacticPostComment) {
        if(findTacticPostComment.isEmpty()) throw new NoExistTacticPostComment("해당하는 댓글이 없습니다.");
    }

    public void checkTacticPostCommentWriter(Long memberId, TacticPostComment tacticPostComment) {
        if(tacticPostComment.getMemberId() != memberId) throw new NoMatchingWriter("해당 댓글의 작성자가 아닙니다.");
    }
}
