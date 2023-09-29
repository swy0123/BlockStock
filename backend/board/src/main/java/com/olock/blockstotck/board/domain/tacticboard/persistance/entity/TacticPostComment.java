package com.olock.blockstotck.board.domain.tacticboard.persistance.entity;

import com.olock.blockstotck.board.global.entity.BaseEntity;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class TacticPostComment extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "tactic_id")
    private TacticPost tacticPost;
    private Long memberId;
    private String content;
    private LocalDateTime createdAt;
}
