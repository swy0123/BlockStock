package com.olock.blockstotck.board.domain.freeboard.exception.validator;

import com.olock.blockstotck.board.domain.freeboard.exception.NoExistFreePost;
import com.olock.blockstotck.board.domain.freeboard.exception.NoMatchingWriter;
import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePost;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class FreePostValidator {

    public void checkFreePostExist(Optional<FreePost> freePost){
        if(freePost.isEmpty()){
            throw new NoExistFreePost("해당 게시글이 존재하지 않습니다.");
        }
    }

    public void checkFreePostWriter(FreePost freePost, Long memberId){
        if(freePost.getMemberId() != memberId){
            throw new NoMatchingWriter("해당 게시글 작성자가 아닙니다.");
        }
    }
}
