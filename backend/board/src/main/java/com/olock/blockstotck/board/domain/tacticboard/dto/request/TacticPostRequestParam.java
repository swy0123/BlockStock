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

    public TacticPostRequestParam(String sort, Integer page, Integer size, String keyword, Boolean my, Boolean like) {
        this.sort = sort == null ? "date" : sort;
        this.page = page;
        this.size = size;
        this.keyword = keyword == null ? "" : keyword;
        this.my = my == null ? false : my;
        this.like = like == null ? false : my;
    }
}
