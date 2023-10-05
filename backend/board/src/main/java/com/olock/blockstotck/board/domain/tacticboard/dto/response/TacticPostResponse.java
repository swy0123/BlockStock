package com.olock.blockstotck.board.domain.tacticboard.dto.response;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class TacticPostResponse {
    private Long memberId;
    private Long tacticPostId;
    private String nickName;
    private String title;
    private String optionName;
    private String imgPath;
    private Double testReturns;
    private String content;
    private Double contestReturns;
    private Long likeCnt;
    private Long hit;
    private LocalDateTime createdAt;
    private Boolean isLike;
    private String tacticJsonCode;
    private String tacticPythonCode;

    public TacticPostResponse(TacticPost tacticPost, String nickName, Long likeCnt, boolean isLike) {
        this.memberId = tacticPost.getMemberId();
        this.nickName = nickName;
        this.tacticPostId = tacticPost.getTacticId();
        this.title = tacticPost.getTitle();
        this.optionName = tacticPost.getOptionName();
        this.imgPath = tacticPost.getImgPath();
        this.testReturns = tacticPost.getTestReturns();
        this.content = tacticPost.getContent();
        this.contestReturns = tacticPost.getContestReturns();
        this.likeCnt = likeCnt;
        this.hit = tacticPost.getHit();
        this.createdAt = tacticPost.getCreatedAt();
        this.isLike = isLike;
        this.tacticJsonCode = tacticPost.getTacticJsonCode();
        this.tacticPythonCode = tacticPost.getTacticPythonCode();
    }
}
