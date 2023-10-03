package com.olock.blockstotck.board.domain.freeboard.dto.response;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePostComment;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class FreePostCommentResponse {
    private Long commentId;
    private Long memberId;
    private String nickname;
    private String content;
    private LocalDateTime createdAt;

    public FreePostCommentResponse(FreePostComment freePostComment, String nickname){
        this.commentId = freePostComment.getId();
        this.memberId = freePostComment.getMemberId();
        this.nickname = nickname;
        this.content = freePostComment.getContent();
        this.createdAt = freePostComment.getCreatedAt();
    }
}
