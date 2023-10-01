package com.olock.blockstotck.board.domain.freeboard.dto.request;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePost;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FreeboardPostRequest {
    String title;
    String content;

    public FreePost toFreePostEntity(){
        FreePost freepost = new FreePost();

        freepost.setTitle(this.getTitle());
        freepost.setContent(this.getContent());
        freepost.setHit(0);
        freepost.setCreatedAt(LocalDateTime.now());
        freepost.setUpdatedAt(LocalDateTime.now());

        return freepost;
    }
}
