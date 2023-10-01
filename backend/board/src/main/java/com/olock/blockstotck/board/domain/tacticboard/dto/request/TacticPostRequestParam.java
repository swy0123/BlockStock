package com.olock.blockstotck.board.domain.tacticboard.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
public class TacticPostRequestParam {
    private String sort;
    private Integer page;
    private Integer size;
    private String keyword;
    private Boolean my;
    private Boolean like;
}
