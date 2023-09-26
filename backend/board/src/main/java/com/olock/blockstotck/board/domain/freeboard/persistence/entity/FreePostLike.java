package com.olock.blockstotck.board.domain.freeboard.persistence.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class FreePostLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "free_post_id")
    private FreePost freePost;
    private long memberId;
    private LocalDateTime createdAt;
}
