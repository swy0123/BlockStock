package com.olock.blockstotck.board.domain.freeboard.presentation;

import com.olock.blockstotck.board.domain.freeboard.application.FreeboardService;
import com.olock.blockstotck.board.domain.freeboard.dto.request.FreePostCommentRequest;
import com.olock.blockstotck.board.domain.freeboard.dto.request.FreeboardPostRequest;
import com.olock.blockstotck.board.infra.awsS3.AwsS3Uploader;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/free-board")
@RequiredArgsConstructor
public class FreeboardController {

    private final FreeboardService freeboardService;
    private final AwsS3Uploader awsS3Uploader;

    @PostMapping("")
    public ResponseEntity<Void> postFreePost(@RequestHeader("Member-id") Long memberId,
                                     @RequestPart(value = "fileList") List<MultipartFile> multipartFileList,
                                     @RequestPart(value = "postRequest") FreeboardPostRequest freeboardPostRequest) throws IOException {

        long freePostId = freeboardService.postFreePost(memberId, freeboardPostRequest);

        List<String> filePathList = new ArrayList<>();
        for(MultipartFile file : multipartFileList){
            String filePath = awsS3Uploader.upload(file, "freeboard");
            filePathList.add(filePath);
        }

        freeboardService.postFreeBoardFile(multipartFileList, filePathList, freePostId);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{freeboardId}")
    public ResponseEntity<Void> deleteFreePost(@RequestHeader("Member-id") Long memberId,
                                               @PathVariable Long freeboardId){

        freeboardService.deleteFreePost(memberId, freeboardId);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/comment")
    public ResponseEntity<Void> postFreePostComment(@RequestHeader("Member-id") Long memberId,
                                                    @RequestBody FreePostCommentRequest freePostCommentRequest){

        freeboardService.postFreePostComment(memberId, freePostCommentRequest);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<Void> deleteFreePostComment(@RequestHeader("Member-id") Long memberId,
                                                      @PathVariable Long commentId){

        freeboardService.deleteFreePostComment(memberId, commentId);

        return ResponseEntity.ok().build();
    }
}
