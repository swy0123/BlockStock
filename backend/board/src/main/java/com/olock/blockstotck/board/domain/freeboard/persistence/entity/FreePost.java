package com.olock.blockstotck.board.domain.freeboard.persistence.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity
@Getter @Setter @ToString
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
