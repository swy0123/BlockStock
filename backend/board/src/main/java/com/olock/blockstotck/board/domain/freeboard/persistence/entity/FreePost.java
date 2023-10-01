package com.olock.blockstotck.board.domain.freeboard.persistence.entity;


import com.olock.blockstotck.board.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

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

    public FreePost(long memberId, String title, String content, long hit){
        super();
        this.memberId = memberId;
        this.title = title;
        this.content = content;
        this.hit = hit;
    }
}
