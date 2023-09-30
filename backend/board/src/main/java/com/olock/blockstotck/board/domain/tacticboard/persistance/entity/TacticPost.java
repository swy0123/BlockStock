package com.olock.blockstotck.board.domain.tacticboard.persistance.entity;

import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequest;
import com.olock.blockstotck.board.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

@Entity
@NoArgsConstructor
public class TacticPost extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long memberId;
    private Long tacticId;
    private String title;
    private String content;
    private String tacticPythonCode;
    private String imgPath;
    @ColumnDefault("0")
    private String hit;

    public TacticPost(Long memberId, String tacticPythonCode, String imgPath, TacticPostRequest tacticPostRequest) {
        super();
        this.memberId = memberId;
        this.tacticId = tacticPostRequest.getTacticId();
        this.title = tacticPostRequest.getTitle();
        this.content = tacticPostRequest.getContent();
        this.tacticPythonCode = tacticPythonCode;
        this.imgPath = imgPath;
    }
}
