package com.olock.blockstotck.board.domain.tacticboard.application;

import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostCommentRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequestParam;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostCommentResponse;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostResponse;
import com.olock.blockstotck.board.domain.tacticboard.exception.*;
import com.olock.blockstotck.board.domain.tacticboard.exception.validator.TacticPostValidator;
import com.olock.blockstotck.board.domain.tacticboard.persistance.TacticPostCommentRepository;
import com.olock.blockstotck.board.domain.tacticboard.persistance.TacticPostLikeRepository;
import com.olock.blockstotck.board.domain.tacticboard.persistance.TacticPostRepository;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostComment;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostLike;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TacticBoardServiceImpl implements TacticBoardService {

    private final TacticPostRepository tacticPostRepository;
    private final TacticPostLikeRepository tacticPostLikeRepository;
    private final TacticPostCommentRepository tacticPostCommentRepository;

    private final TacticPostValidator tacticPostValidator;

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

        Optional<TacticPost> tacticPost = tacticPostRepository.findById(tacticPostId);
        tacticPostValidator.checkTacticPostExist(tacticPost);

        Optional<TacticPostLike> existTacticPostLike = tacticPostLikeRepository.findByMemberIdAndTacticPostId(memberId, tacticPostId);
        tacticPostValidator.checkAlreadyLike(existTacticPostLike);

        TacticPostLike tacticPostLike = new TacticPostLike(memberId, tacticPost.get());
        tacticPostLikeRepository.save(tacticPostLike);
    }

    @Override
    public void unLikeTacticPost(Long memberId, Long tacticPostId) {
        Optional<TacticPost> tacticPost = tacticPostRepository.findById(tacticPostId);
        tacticPostValidator.checkTacticPostExist(tacticPost);

        Optional<TacticPostLike> tacticPostLike = tacticPostLikeRepository.findByMemberIdAndTacticPostId(memberId, tacticPostId);
        tacticPostValidator.checkAlreadyUnLike(tacticPostLike);

        tacticPostLikeRepository.delete(tacticPostLike.get());
    }

    @Override
    public TacticPostResponse getTacticPost(Long tacticPostId) {
        Optional<TacticPost> tacticPost = tacticPostRepository.findById(tacticPostId);
        tacticPostValidator.checkTacticPostExist(tacticPost);

        tacticPost.get().updateHit();

//      option_name 얻어오기
//      test_returns,  얻어오기
        String optionName = "";
        double testReturns = 0;
        double contestReturns = 0;
//        long likeCnt = tacticPostLikeRepository.countByTacticId(tacticPostId);
        long likeCnt = 0;

        return new TacticPostResponse(tacticPost.get(), optionName, testReturns, contestReturns, likeCnt);
    }

    @Override
    public void deleteTacticPost(Long memberId, Long tacticPostId) {
        TacticPost tacticPost = tacticPostRepository.findById(tacticPostId).
                orElseThrow(() -> new NoExistTacticPost("해당하는 게시글이 없습니다."));

        if(tacticPost.getMemberId() != memberId) throw new NoMatchingWriter("해당 게시글 작성자가 아닙니다.");

        tacticPostRepository.delete(tacticPost);
    }

    @Override
    public List<TacticPostCommentResponse> getTacticPostCommentList(Long tacticPostId) {
        List<TacticPostComment> tacticPostComments = tacticPostCommentRepository.findByTacticPostId(tacticPostId);

        List<TacticPostCommentResponse> tacticPostCommentResponseList = new ArrayList<>();

        return tacticPostComments.stream()
                .map(tacticPostComment -> new TacticPostCommentResponse("", tacticPostComment))
                .collect(Collectors.toList());
    }

    @Override
    public void writeTacticPostComment(Long memberId, TacticPostCommentRequest tacticPostCommentRequest) {
        TacticPost tacticPost = tacticPostRepository.findById(tacticPostCommentRequest.getTacticBoardId()).
                orElseThrow(() -> new NoExistTacticPost("해당하는 게시글이 없습니다."));

        TacticPostComment tacticPostComment = new TacticPostComment(memberId, tacticPost, tacticPostCommentRequest);
        tacticPostCommentRepository.save(tacticPostComment);
    }

    @Override
    public void deleteTacticPostComment(Long memberId, Long tacticPostId) {
        TacticPostComment tacticPostComment = tacticPostCommentRepository.findById(tacticPostId).
                orElseThrow(() -> new NoExistTacticPostComment("해당 댓글이 없습니다."));

        if(tacticPostComment.getMemberId() != memberId) throw new NoMatchingWriter("해당 게시글 작성자가 아닙니다.");

        tacticPostCommentRepository.delete(tacticPostComment);
    }
}
