package com.olock.blockstotck.board.domain.tacticboard.persistance.entity;

import com.olock.blockstotck.board.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class TacticPostLike extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long memberId;
    @ManyToOne
    private TacticPost tacticPost;

    public TacticPostLike(Long memberId, TacticPost tacticPost) {
        this.memberId = memberId;
        this.tacticPost = tacticPost;
    }
}
