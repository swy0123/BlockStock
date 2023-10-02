package com.olock.blockstotck.board.domain.freeboard.application;

import com.olock.blockstotck.board.domain.freeboard.dto.request.FreePostCommentRequest;
import com.olock.blockstotck.board.domain.freeboard.dto.request.FreeboardPostRequest;
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
}
