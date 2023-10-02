package com.olock.blockstotck.board.domain.tacticboard.application;

import com.olock.blockstotck.board.domain.tactic.persistance.Tactic;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostCommentRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequestParam;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostCommentResponse;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostListResponse;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostResponse;
import com.olock.blockstotck.board.domain.tacticboard.exception.*;
import com.olock.blockstotck.board.domain.tacticboard.exception.validator.TacticPostCommentValidator;
import com.olock.blockstotck.board.domain.tacticboard.exception.validator.TacticPostValidator;
import com.olock.blockstotck.board.domain.tacticboard.persistance.TacticPostCommentRepository;
import com.olock.blockstotck.board.domain.tacticboard.persistance.TacticPostLikeRepository;
import com.olock.blockstotck.board.domain.tacticboard.persistance.TacticPostRepository;
import com.olock.blockstotck.board.domain.tacticboard.persistance.TacticPostSpecification;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostComment;
import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPostLike;
import com.olock.blockstotck.board.infra.member.WebClientUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class TacticBoardServiceImpl implements TacticBoardService {

    private final TacticPostRepository tacticPostRepository;
    private final TacticPostLikeRepository tacticPostLikeRepository;
    private final TacticPostCommentRepository tacticPostCommentRepository;

    private final TacticPostValidator tacticPostValidator;
    private final TacticPostCommentValidator tacticPostCommentValidator;
    private final WebClientUtil webClientUtil;

    @Override
    public void writeTacticPost(Long memberId, TacticPostRequest tacticPostRequest) {
        Tactic tactic = null;

        try {
            String url = String.format("https://j9b210.p.ssafy.io:8443/api/tactic/%s", tacticPostRequest.getTacticId());
            tactic = webClientUtil.get(
                    url,
                    memberId,
                    Tactic.class
            );
        } catch (TacticRequestException e) {
            throw new TacticRequestException("Tactic 정보 요청 실패");
        }

//      optionName: 종목 검색 API에서 가지고 올까?
        String optionName = "";

        TacticPost tacticPost = TacticPost.builder()
                .memberId(memberId)
                .tacticId(tacticPostRequest.getTacticId())
                .title(tacticPostRequest.getTitle())
                .content(tacticPostRequest.getContent())
                .optionName(optionName)
                .tacticPythonCode(tactic.getTacticPythonCode())
                .tacticJsonCode(tactic.getTacticJsonCode())
                .testReturns(tactic.getTestReturns())
                .contestReturns(tactic.getContestReturns())
                .imgPath(tactic.getImgPath())
                .build();

        tacticPostRepository.save(tacticPost);
    }

    @Override
    public List<TacticPostListResponse> getTacticPostList(Long memberId, TacticPostRequestParam tacticPostRequestParam) {

        Pageable pageable = PageRequest.of(
                tacticPostRequestParam.getPage(),
                tacticPostRequestParam.getSize(),
                Sort.by(Sort.Direction.DESC, tacticPostRequestParam.getSort()));

        Specification<TacticPost> spec = (root, query, criteriaBuilder) -> null;

        if(tacticPostRequestParam.getKeyword() != null)  spec = spec.and(TacticPostSpecification.findByKeyword(tacticPostRequestParam.getKeyword()));

        if(tacticPostRequestParam.getMy()) spec = spec.and(TacticPostSpecification.findByMy(memberId));

        if(tacticPostRequestParam.getLike()) spec = spec.and(TacticPostSpecification.findByLike(memberId));

        Page<TacticPost> findTacticPostList = tacticPostRepository.findAll(spec, pageable);

        return findTacticPostList.stream()
                .map(findTacticPost -> {
                    boolean isLike = !tacticPostLikeRepository.findByMemberIdAndTacticPostId(memberId, findTacticPost.getId()).isEmpty();
                    return new TacticPostListResponse(findTacticPost, isLike);
                }).collect(Collectors.toList());
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
    public TacticPostResponse getTacticPost(Long memberId, Long tacticPostId) {
        Optional<TacticPost> findTacticPost = tacticPostRepository.findById(tacticPostId);
        tacticPostValidator.checkTacticPostExist(findTacticPost);
        tacticPostRepository.updateHit(tacticPostId);

        TacticPost tacticPost = findTacticPost.get();

        long likeCnt = tacticPostLikeRepository.countByTacticPostId(tacticPostId);
        String nickName = "";

        boolean isLike = true;
        if(tacticPostLikeRepository.findByMemberIdAndTacticPostId(memberId, tacticPostId).isEmpty()) isLike = false;

        return new TacticPostResponse(tacticPost, nickName, likeCnt, isLike);
    }

    @Override
    public void updateHit(Long tacticId) {
        tacticPostRepository.updateHit(tacticId);
    }

    @Override
    public void deleteTacticPost(Long memberId, Long tacticPostId) {
        Optional<TacticPost> findTacticPost = tacticPostRepository.findById(tacticPostId);
        tacticPostValidator.checkTacticPostExist(findTacticPost);

        TacticPost tacticPost = findTacticPost.get();

        tacticPostValidator.checkTacticPostWriter(tacticPost, memberId);

        tacticPostRepository.delete(tacticPost);
    }

    @Override
    public List<TacticPostCommentResponse> getTacticPostCommentList(Long tacticPostId) {

        Optional<TacticPost> findTacticPost = tacticPostRepository.findById(tacticPostId);
        tacticPostValidator.checkTacticPostExist(findTacticPost);

        List<TacticPostComment> tacticPostComments = tacticPostCommentRepository.findByTacticPostId(tacticPostId);

        return tacticPostComments.stream()
                .map(tacticPostComment -> new TacticPostCommentResponse("", tacticPostComment))
                .collect(Collectors.toList());
    }

    @Override
    public void writeTacticPostComment(Long memberId, TacticPostCommentRequest tacticPostCommentRequest) {

        Optional<TacticPost> findTacticPost = tacticPostRepository.findById(tacticPostCommentRequest.getTacticBoardId());
        tacticPostValidator.checkTacticPostExist(findTacticPost);

        TacticPost tacticPost = findTacticPost.get();

        TacticPostComment tacticPostComment = new TacticPostComment(memberId, tacticPost, tacticPostCommentRequest);
        tacticPostCommentRepository.save(tacticPostComment);
    }

    @Override
    public void deleteTacticPostComment(Long memberId, Long commentId) {

        Optional<TacticPostComment> findTacticPostComment = tacticPostCommentRepository.findByIdAndMemberId(commentId, memberId);

        tacticPostCommentValidator.checkTacticPostCommentExist(findTacticPostComment);

        TacticPostComment tacticPostComment = findTacticPostComment.get();

        tacticPostCommentValidator.checkTacticPostCommentWriter(memberId, tacticPostComment);

        tacticPostCommentRepository.delete(tacticPostComment);
    }
}
