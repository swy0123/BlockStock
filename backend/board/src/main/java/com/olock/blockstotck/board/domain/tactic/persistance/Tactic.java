package com.olock.blockstotck.board.domain.tactic.persistance;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class Tactic {
    @Id
    private Long id;
    private Long memberId;
    private String title;
    private String optionCode;
    private String tacticJsonCode;
    private String tacticPythonCode;
    private Double testReturns;
    private Double contestReturns;
    private String imgPath;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Tactic(Long id, Long memberId, String title, String optionCode, String tacticJsonCode, String tacticPythonCode, Double testReturns, Double contestReturns, String imgPath, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.memberId = memberId;
        this.title = title;
        this.optionCode = optionCode;
        this.tacticJsonCode = tacticJsonCode;
        this.tacticPythonCode = tacticPythonCode;
        this.testReturns = testReturns;
        this.contestReturns = contestReturns;
        this.imgPath = imgPath;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
