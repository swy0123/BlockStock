package com.olock.blockstotck.board.domain.tacticboard.persistance.entity;

import com.olock.blockstotck.board.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TacticPostLike extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long memberId;
    @ManyToOne
    @JoinColumn(name = "tactic_post_id")
    private TacticPost tacticPost;

    public TacticPostLike(Long memberId, TacticPost tacticPost) {
        this.memberId = memberId;
        this.tacticPost = tacticPost;
    }
}
