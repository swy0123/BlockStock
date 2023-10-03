package com.olock.blockstotck.board.domain.tactic.persistance;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
}
