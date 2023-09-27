package com.olock.blockstotck.board.domain.freeboard.persistence.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity @Getter @Setter @ToString
public class FreePostComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "free_post_id")
    private FreePost freePost;
    private long memberId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
