package com.olock.blockstotck.board.domain.tacticboard.application;

import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostCommentResponse;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TacticBoardServiceImpl implements TacticBoardService {
    @Override
    public void writeTacticPost(Long memberId, TacticPostRequest tacticBoardReqDto) {

    }

    @Override
    public List<TacticPostResponse> getTacticPostList() {
        return null;
    }

    @Override
    public void likeTacticPost(Long memberId, Long tacticPostId) {

    }

    @Override
    public void unLikeTacticPost(Long memberId, Long tacticPostId) {

    }

    @Override
    public TacticPostResponse getTacticPost() {
        return null;
    }

    @Override
    public void deleteTacticPost(Long tacticBoardId) {

    }

    @Override
    public void updateHit(Long tacticBoardId) {

    }

    @Override
    public List<TacticPostCommentResponse> getTacticPostCommentList() {
        return null;
    }

    @Override
    public void writeTacticPostComment(Long memberId, Long tacticPostId) {

    }

    @Override
    public void deleteTacticPostComment(Long memberId, Long tacticPostId) {

    }
}
