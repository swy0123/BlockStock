package com.olock.blockstotck.board.domain.option.persistance;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class Option {
    private String optionCode;
    private String optionName;
    private String todayCode;
    private double diffRate;
}
