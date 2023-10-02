package com.olock.blockstotck.board.domain.freeboard.persistence.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@NoArgsConstructor
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

    public File(FreePost freePost, String imgOriginalName, String imgPath, String type, long size){
        super();
        this.freePost = freePost;
        this.imgOriginalName = imgOriginalName;
        this.imgPath = imgPath;
        this.type = type;
        this.size = size;
    }

}
