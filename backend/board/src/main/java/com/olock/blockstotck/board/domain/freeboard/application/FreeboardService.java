package com.olock.blockstotck.board.domain.freeboard.application;

import com.olock.blockstotck.board.domain.freeboard.dto.request.FreePostCommentRequest;
import com.olock.blockstotck.board.domain.freeboard.dto.request.FreePostLikeRequest;
import com.olock.blockstotck.board.domain.freeboard.dto.request.FreePostRequestParam;
import com.olock.blockstotck.board.domain.freeboard.dto.request.FreeboardPostRequest;
import com.olock.blockstotck.board.domain.freeboard.dto.response.FreePostCommentResponse;
import com.olock.blockstotck.board.domain.freeboard.dto.response.FreePostListCntResponse;
import com.olock.blockstotck.board.domain.freeboard.dto.response.FreePostListResponse;
import com.olock.blockstotck.board.domain.freeboard.dto.response.FreePostResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface FreeboardService{

    long postFreePost(long memberId, FreeboardPostRequest freeboardPostRequest);

    void postFreeBoardFile(List<MultipartFile> multipartFileList,
                           List<String> filePathList,
                           long freePostId);

    void deleteFreePost(Long memberId, Long freeboardId);

    void postFreePostComment(Long memberId, FreePostCommentRequest freePostCommentRequest);

    void deleteFreePostComment(Long memberId, Long commentId);

    void likeFreePost(Long memberId, FreePostLikeRequest freePostLikeRequest);

    void unlikeFreePost(Long memberId, Long freePostId);

    FreePostResponse getFreePost(Long memberId, Long freePostId);

    FreePostListCntResponse getFreePostList(Long memberId, FreePostRequestParam freePostRequestParam);

    List<FreePostListResponse> getFreePostMy(Long memberId, Long userId, Integer page, Integer size);

    List<FreePostCommentResponse> getFreePostCommentList(Long freePostId);
}
