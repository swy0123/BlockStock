package com.olock.blockstotck.board.domain.tacticboard.application;

import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequestParam;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostCommentResponse;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostResponse;

import java.util.List;

public interface TacticBoardService {
    void writeTacticPost(Long memberId, TacticPostRequest tacticBoardReqDto);
    List<TacticPostResponse> getTacticPostList(Long memberId, TacticPostRequestParam tacticPostRequestParam);
    void likeTacticPost(Long memberId, Long tacticId);
    void unLikeTacticPost(Long memberId, Long tacticPostId);
    TacticPostResponse getTacticPost(Long memberId);
    void deleteTacticPost(Long tacticBoardId);
    void updateHit(Long tacticBoardId);
    List<TacticPostCommentResponse> getTacticPostCommentList();
    void writeTacticPostComment(Long memberId, Long tacticPostId);
    void deleteTacticPostComment(Long memberId, Long tacticPostId);
}
