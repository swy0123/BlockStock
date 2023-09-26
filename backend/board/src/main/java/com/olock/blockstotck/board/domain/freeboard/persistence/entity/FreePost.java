package com.olock.blockstotck.board.domain.freeboard.persistence.entity;


import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class FreePost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long memberId;
    private String title;
    private String content;
    private int hit;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
