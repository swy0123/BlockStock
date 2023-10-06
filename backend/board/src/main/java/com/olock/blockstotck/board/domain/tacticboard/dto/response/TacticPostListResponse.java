package com.olock.blockstotck.board.domain.tacticboard.dto.response;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class TacticPostListResponse {
    private Long tacticPostId;
    private String title;
    private double testReturns;
    private double contestReturns;
    private Long likeCnt;
    private Boolean isLike;
    private Long hit;
    private LocalDateTime createdAt;
    private boolean contestReturnStatus;
    private boolean testReturnStatus;
    private String imgPath;

    public TacticPostListResponse(TacticPost findTacticPost, boolean isLike) {
        this.tacticPostId = findTacticPost.getId();
        this.title = findTacticPost.getTitle();
        this.testReturns = findTacticPost.getTestReturns() == null ? 0 : findTacticPost.getTestReturns();
        this.contestReturns = findTacticPost.getContestReturns() == null ? 0 : findTacticPost.getContestReturns();
        this.likeCnt = findTacticPost.getLikes();
        this.isLike = isLike;
        this.hit = findTacticPost.getHit();
        this.imgPath = findTacticPost.getImgPath();
        this.createdAt = findTacticPost.getCreatedAt();
        this.contestReturnStatus = findTacticPost.getContestReturns() == null ? false : true;
        this.testReturnStatus = findTacticPost.getTestReturns() == null ? false : true;
    }
}
