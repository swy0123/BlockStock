package com.olock.blockstotck.board.domain.freeboard.dto.response;

import lombok.Getter;

import java.util.List;

@Getter
public class FreePostListCntResponse {
    List<FreePostListResponse> freeePostListResponseList;
    Long totalCnt;

    public FreePostListCntResponse(List<FreePostListResponse> freePostListResponse, long totalCnt){
        this.freeePostListResponseList = freePostListResponse;
        this.totalCnt = totalCnt;
    }
}
