package com.olock.blockstotck.board.domain.tacticboard.dto.response;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostComment;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
public class TacticPostCommentResponse {
    private Long id;
    private Long memberId;
    private String nickname;
    private String content;
    private LocalDateTime createdAt;

    public TacticPostCommentResponse(String nickname, TacticPostComment tacticPostComment) {
        this.id = tacticPostComment.getId();
        this.memberId = tacticPostComment.getMemberId();
        this.nickname = nickname;
        this.content = tacticPostComment.getContent();
        this.createdAt = tacticPostComment.getCreatedAt();
    }
}
