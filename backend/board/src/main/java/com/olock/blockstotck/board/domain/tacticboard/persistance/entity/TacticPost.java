package com.olock.blockstotck.board.domain.tacticboard.persistance.entity;

import com.olock.blockstotck.board.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TacticPost extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long memberId;
    private Long tacticId;
    private String title;
    private String content;
    private String optionName;
    private String tacticPythonCode;
    private String tacticJsonCode;
    private Double testReturns;
    private Double contestReturns;
    private String imgPath;
    @Column(columnDefinition = "BigInteger default 0")
    private Long hit;

    @OneToMany(mappedBy = "tacticPost", cascade = CascadeType.ALL)
    private List<TacticPostLike> tacticPostLikes = new ArrayList<>();

    @Builder
    public TacticPost(Long id, Long memberId, Long tacticId, String title, String content,
                      String optionName, String tacticPythonCode, String tacticJsonCode,
                      Double testReturns, Double contestReturns, String imgPath) {
        this.id = id;
        this.memberId = memberId;
        this.tacticId = tacticId;
        this.title = title;
        this.content = content;
        this.optionName = optionName;
        this.tacticPythonCode = tacticPythonCode;
        this.tacticJsonCode = tacticJsonCode;
        this.testReturns = testReturns;
        this.contestReturns = contestReturns;
        this.imgPath = imgPath;
        this.hit = 0L;
    }
}
