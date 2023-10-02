package com.olock.blockstotck.board.domain.tacticboard.application;

import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostCommentRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequestParam;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostCommentResponse;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostListResponse;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostResponse;

import java.util.List;

public interface TacticBoardService {
    void writeTacticPost(Long memberId, TacticPostRequest tacticBoardReqDto);
    List<TacticPostListResponse> getTacticPostList(Long memberId, TacticPostRequestParam tacticPostRequestParam);
    void likeTacticPost(Long memberId, Long tacticPostId);
    void unLikeTacticPost(Long memberId, Long tacticPostId);
    TacticPostResponse getTacticPost(Long memberId, Long tacticPostId);
    void updateHit(Long tacticId);
    void deleteTacticPost(Long memberId, Long tacticPostId);
    List<TacticPostCommentResponse> getTacticPostCommentList(Long tacticPostId);
    void writeTacticPostComment(Long memberId, TacticPostCommentRequest tacticPostId);
    void deleteTacticPostComment(Long memberId, Long commentId);
}
