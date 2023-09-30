package com.olock.blockstotck.board.domain.tacticboard.persistance.entity;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
public class TacticPostLike {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long memberId;
    @ManyToOne
    private TacticPost tacticPost;
    private LocalDateTime createdAt;

    public TacticPostLike(Long memberId, TacticPost tacticPost) {
        this.memberId = memberId;
        this.tacticPost = tacticPost;
        this.createdAt = LocalDateTime.now();
    }
}
