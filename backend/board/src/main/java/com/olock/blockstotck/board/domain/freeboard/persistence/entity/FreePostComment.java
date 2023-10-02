package com.olock.blockstotck.board.domain.freeboard.persistence.entity;

import com.olock.blockstotck.board.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity @Getter
@NoArgsConstructor
public class FreePostComment extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "free_post_id")
    private FreePost freePost;
    private long memberId;
    private String content;

    public FreePostComment(Long memberId, FreePost freePost, String content){
        super();
        this.memberId = memberId;
        this.freePost = freePost;
        this.content = content;
    }
}
