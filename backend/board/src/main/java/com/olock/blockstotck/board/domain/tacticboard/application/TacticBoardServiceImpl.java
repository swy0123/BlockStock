package com.olock.blockstotck.board.domain.tacticboard.application;

import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequestParam;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostCommentResponse;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostResponse;
import com.olock.blockstotck.board.domain.tacticboard.persistance.TacticBoardRepository;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TacticBoardServiceImpl implements TacticBoardService {
    private final TacticBoardRepository tacticBoardRepository;

    @Override
    public void writeTacticPost(Long memberId, TacticPostRequest tacticPostRequest) {
//      Tactic 서버에 요청해서, 해당 tacticId에 대한 tacticPythonCode와 imgPath에 반환
        String tacticPythonCode = "";
        String imgPath = "";

        TacticPost tacticPost = new TacticPost(memberId, tacticPythonCode, imgPath, tacticPostRequest);
        tacticBoardRepository.save(tacticPost);
    }

    @Override
    public List<TacticPostResponse> getTacticPostList(Long memberId, TacticPostRequestParam tacticPostRequestParam) {

        return null;
    }

    @Override
    public void likeTacticPost(Long memberId, Long tacticPostId) {

    }

    @Override
    public void unLikeTacticPost(Long memberId, Long tacticPostId) {

    }

    @Override
    public TacticPostResponse getTacticPost(Long memberId) {
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
