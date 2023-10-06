package com.olock.blockstotck.board.domain.freeboard.dto.request;

import lombok.Getter;

@Getter
public class FreePostCommentRequest {
    private Long freeBoardId;
    private String content;
}
