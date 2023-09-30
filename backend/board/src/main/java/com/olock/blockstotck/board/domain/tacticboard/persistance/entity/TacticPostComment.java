package com.olock.blockstotck.board.domain.tacticboard.persistance.entity;

import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostCommentRequest;
import com.olock.blockstotck.board.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class TacticPostComment extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private TacticPost tacticPost;
    private Long memberId;
    private String content;
    private LocalDateTime createdAt;

    public TacticPostComment(Long memberId, TacticPost tacticPost, TacticPostCommentRequest tacticPostCommentRequest) {
        super();
        this.memberId = memberId;
        this.tacticPost = tacticPost;
        this.content = tacticPostCommentRequest.getContent();
        this.createdAt = LocalDateTime.now();
    }
}
