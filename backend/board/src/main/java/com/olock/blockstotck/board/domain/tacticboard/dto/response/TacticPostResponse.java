package com.olock.blockstotck.board.domain.tacticboard.dto.response;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class TacticPostResponse {
    private Long tacticPostId;
    private String title;
    private String optionName;
    private String imgPath;
    private Double testReturns;
    private Double contestReturns;
    private Long likeCnt;
    private Long hit;
    private LocalDateTime createdAt;

    public TacticPostResponse(TacticPost tacticPost, Long likeCnt) {
        this.tacticPostId = tacticPost.getTacticId();
        this.title = tacticPost.getTitle();
        this.optionName = tacticPost.getOptionName();
        this.imgPath = tacticPost.getImgPath();
        this.testReturns = tacticPost.getTestReturns();
        this.contestReturns = tacticPost.getContestReturns();
        this.likeCnt = likeCnt;
        this.hit = tacticPost.getHit();
        this.createdAt = tacticPost.getCreatedAt();
    }
}
