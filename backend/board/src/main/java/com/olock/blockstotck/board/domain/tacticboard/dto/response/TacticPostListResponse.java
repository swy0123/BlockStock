package com.olock.blockstotck.board.domain.tacticboard.dto.response;

import java.time.LocalDateTime;

public class TacticPostListResponse {
    private Long tacticPostId;
    private String title;
    private double testReturns;
    private double contestReturns;
    private Long likeCnt;
    private Boolean isLike;
    private Long hit;
    private LocalDateTime createdAt;
}
