package com.olock.blockstotck.board.domain.tacticboard.application;

import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequestParam;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostCommentResponse;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostResponse;
import com.olock.blockstotck.board.domain.tacticboard.exception.AlreadyLikeTacticPost;
import com.olock.blockstotck.board.domain.tacticboard.exception.AlreadyUnLikeTacticPost;
import com.olock.blockstotck.board.domain.tacticboard.exception.NoExistTacticPost;
import com.olock.blockstotck.board.domain.tacticboard.persistance.TacticPostLikeRepository;
import com.olock.blockstotck.board.domain.tacticboard.persistance.TacticPostRepository;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostLike;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TacticBoardServiceImpl implements TacticBoardService {
    private final TacticPostRepository tacticPostRepository;
    private final TacticPostLikeRepository tacticPostLikeRepository;
    @Override
    public void writeTacticPost(Long memberId, TacticPostRequest tacticPostRequest) {
//      Tactic 서버에 요청해서, 해당 tacticId에 대한 tacticPythonCode와 imgPath에 반환
        String tacticPythonCode = "";
        String imgPath = "";

        TacticPost tacticPost = new TacticPost(memberId, tacticPythonCode, imgPath, tacticPostRequest);
        tacticPostRepository.save(tacticPost);
    }

    @Override
    public List<TacticPostResponse> getTacticPostList(Long memberId, TacticPostRequestParam tacticPostRequestParam) {
        return null;
    }

    @Override
    public void likeTacticPost(Long memberId, Long tacticPostId) {

        TacticPost tacticPost = tacticPostRepository.findById(tacticPostId).
                orElseThrow(() -> new NoExistTacticPost("해당하는 게시글이 없습니다."));

        Optional<TacticPostLike> existTacticPostLike = tacticPostLikeRepository.findByMemberIdAndTacticPostId(memberId, tacticPostId);
        if(existTacticPostLike.isPresent()) throw new AlreadyLikeTacticPost("이미 게시글에 좋아요를 했습니다.");

        TacticPostLike tacticPostLike = new TacticPostLike(memberId, tacticPost);
        tacticPostLikeRepository.save(tacticPostLike);
    }

    @Override
    public void unLikeTacticPost(Long memberId, Long tacticPostId) {
        TacticPost tacticPost = tacticPostRepository.findById(tacticPostId).
                orElseThrow(() -> new NoExistTacticPost("해당하는 게시글이 없습니다."));

        TacticPostLike unLikeTacticPost = tacticPostLikeRepository.findByMemberIdAndTacticPostId(memberId, tacticPostId).
                orElseThrow(() -> new AlreadyUnLikeTacticPost("이미 게시글 좋아요를 하지 않습니다."));

        tacticPostLikeRepository.delete(unLikeTacticPost);
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
