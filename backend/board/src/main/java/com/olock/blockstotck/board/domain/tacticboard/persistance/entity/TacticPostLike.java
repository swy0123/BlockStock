package com.olock.blockstotck.board.domain.tacticboard.persistance.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class TacticPostLike {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long memberId;
    @ManyToOne
    @JoinColumn(name = "tactic_id")
    private TacticPost tacticPost;
    private LocalDateTime createdAt;
}
