package com.olock.blockstotck.board.domain.freeboard.exception.validator;

import com.olock.blockstotck.board.domain.freeboard.exception.NoExistFreePostComment;
import com.olock.blockstotck.board.domain.freeboard.exception.NoMatchingWriter;
import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePost;
import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePostComment;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class FreePostCommentValidator {
    public void checkFreePostCommentExist(Optional<FreePostComment> tmpFreePostComment){
        if(tmpFreePostComment.isEmpty()){
            throw new NoExistFreePostComment("해당 댓글이 존재하지 않습니다.");
        }
    }

    public void checkFreePostCommentWriter(FreePostComment freePostComment, Long memberId){
        if(freePostComment.getMemberId() != memberId){
            throw new NoMatchingWriter("해당 게시글 작성자가 아닙니다.");
        }
    }
}
