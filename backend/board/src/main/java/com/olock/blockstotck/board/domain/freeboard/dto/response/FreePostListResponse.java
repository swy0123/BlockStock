package com.olock.blockstotck.board.domain.freeboard.dto.response;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePost;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class FreePostListResponse {
    private Long freePostId;
    private String title;
    private Long memberId;
    private String nickname;
    private Long hit;
    private LocalDateTime updatedAt;

    public FreePostListResponse(FreePost freePost, Long memberId, String nickname){
        this.freePostId = freePost.getId();
        this.title = freePost.getTitle();
        this.memberId = memberId;
        this.nickname = nickname;
        this.hit = freePost.getHit();
        this.updatedAt = freePost.getUpdatedAt();
    }
}
