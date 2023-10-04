package com.olock.blockstotck.board.domain.freeboard.persistence.entity;


import com.olock.blockstotck.board.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class FreePost extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long memberId;
    private String title;
    private String content;
    private long hit;
    @OneToMany(mappedBy = "freePost", cascade = CascadeType.ALL)
    private List<FreePostLike> freePostLikes = new ArrayList<>();
    @Formula("(select count(*) from free_post_like where free_post_like.free_post_id=id)")
    private long likes;

    public FreePost(long memberId, String title, String content, long hit){
        super();
        this.memberId = memberId;
        this.title = title;
        this.content = content;
        this.hit = hit;
    }
}
