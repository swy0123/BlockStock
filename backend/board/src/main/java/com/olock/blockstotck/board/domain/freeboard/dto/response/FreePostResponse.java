package com.olock.blockstotck.board.domain.freeboard.dto.response;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePost;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class FreePostResponse {
    private Long memberId;
    private Long freePostId;
    private String nickName;
    private String title;
    private String content;
    private Long hit;
    private LocalDateTime createdAt;
    private Long likeCnt;
    private boolean isLike;
    private List<FileResponse> fileList;

    public FreePostResponse(FreePost freePost, String nickName, Long likeCnt, boolean isLike, List<FileResponse> fileList){
        this.memberId = freePost.getMemberId();
        this.freePostId = freePost.getId();
        this.nickName = nickName;
        this.title = freePost.getTitle();
        this.content = freePost.getContent();
        this.hit = freePost.getHit();
        this.createdAt = freePost.getUpdatedAt();
        this.likeCnt = likeCnt;
        this.isLike = isLike;
        this.fileList = fileList;
    }
}
