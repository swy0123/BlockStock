package com.olock.blockstotck.board.domain.tacticboard.dto.response;

import lombok.Getter;

import java.util.List;

@Getter
public class TacticPostListCntResponse {
    List<TacticPostListResponse> tacticPostListResponseList;
    Long totalCnt;

    public TacticPostListCntResponse(List<TacticPostListResponse> tacticPostListResponse, long totalCount) {
        this.tacticPostListResponseList = tacticPostListResponse;
        this.totalCnt = totalCount;
    }
}
