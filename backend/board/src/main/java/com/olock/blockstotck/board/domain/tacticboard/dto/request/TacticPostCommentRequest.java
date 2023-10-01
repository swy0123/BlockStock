package com.olock.blockstotck.board.domain.tacticboard.dto.request;

import lombok.Getter;

@Getter
public class TacticPostCommentRequest {
    private Long tacticBoardId;
    private String content;
}
