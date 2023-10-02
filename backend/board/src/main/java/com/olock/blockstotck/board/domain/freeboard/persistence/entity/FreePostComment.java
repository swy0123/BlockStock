package com.olock.blockstotck.board.domain.freeboard.persistence.entity;

import com.olock.blockstotck.board.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;

@Entity @Getter
public class FreePostComment extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "free_post_id")
    private FreePost freePost;
    private long memberId;
    private String content;
}
