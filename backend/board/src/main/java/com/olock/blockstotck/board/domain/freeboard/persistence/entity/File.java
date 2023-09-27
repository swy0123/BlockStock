package com.olock.blockstotck.board.domain.freeboard.persistence.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter @ToString
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "free_post_id")
    private FreePost freePost;
    private String imgOriginalName;
    private String imgPath;
    private String type;
    private long size;
}
