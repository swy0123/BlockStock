package com.olock.blockstotck.board.domain.freeboard.dto.request;

import lombok.Getter;

@Getter
public class FreePostRequestParam {
    private String sort;
    private Integer page;
    private Integer size;
    private String keyword;
    private Boolean my;
    private Boolean like;

    public FreePostRequestParam(String sort, Integer page, Integer size, String keyword, Boolean my, Boolean like) {
        this.sort = sort == null ? "createdAt" : sort;
        this.page = page;
        this.size = size;
        this.keyword = keyword == null ? "" : keyword;
        this.my = my == null ? false : my;
        this.like = like == null ? false : like;
    }
}
