package com.olock.blockstotck.board.domain.tacticboard.presentation;

import com.olock.blockstotck.board.domain.tacticboard.application.TacticBoardService;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostCommentRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostLikeRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequestParam;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostCommentResponse;
import com.olock.blockstotck.board.domain.tacticboard.dto.response.TacticPostResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tactic-board")
public class TacticBoardController {
    private final TacticBoardService tacticBoardService;

    @PostMapping("")
    public ResponseEntity<Void> postTacticBoard(@RequestHeader("Member-id") Long memberId,
                                                @RequestBody TacticPostRequest tacticPostRequest) {
        tacticBoardService.writeTacticPost(memberId, tacticPostRequest);
        return ResponseEntity.ok().build();
    }

    @GetMapping("")
    public ResponseEntity<List<TacticPostResponse>> getTacticPostList(@RequestHeader("Member-id") Long memberId,
                                                                      @ModelAttribute TacticPostRequestParam tacticPostRequestParam) {
        return ResponseEntity.ok(tacticBoardService.getTacticPostList(memberId, tacticPostRequestParam));
    }

    @PostMapping("/like")
    public ResponseEntity<Void> likeTacticBoard(@RequestHeader("Member-id") Long memberId,
                                                @RequestBody TacticPostLikeRequest tacticPostLikeRequest) {
        tacticBoardService.likeTacticPost(memberId, tacticPostLikeRequest.getTacticPostId());
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/like/{tacticPostId}")
    public ResponseEntity<Void> unLikeTacticBoard(@RequestHeader("Member-id") Long memberId,
                                                  @PathVariable Long tacticPostId) {

        tacticBoardService.unLikeTacticPost(memberId, tacticPostId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{tacticPostId}")
    public ResponseEntity<TacticPostResponse> getTacticPost(@RequestHeader("Member-id") Long memberId,
                                                            @PathVariable Long tacticPostId) {
        return ResponseEntity.ok(tacticBoardService.getTacticPost(tacticPostId));
    }


    @DeleteMapping("/{tacticPostId}")
    public ResponseEntity<Void> deleteTacticPost(@RequestHeader("Member-id") Long memberId,
                                                 @PathVariable Long tacticPostId) {
        tacticBoardService.deleteTacticPost(memberId, tacticPostId);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/comment")
    public ResponseEntity<Void> writeTacticPostComment(@RequestHeader("Member-id") Long memberId,
                                                       @RequestBody TacticPostCommentRequest tacticPostCommentRequest) {
        tacticBoardService.writeTacticPostComment(memberId, tacticPostCommentRequest);
        return ResponseEntity.ok().build();
    }

    @GetMapping("comment/{tacticPostId}")
    public ResponseEntity<List<TacticPostCommentResponse>> getTacticPostComment(@RequestHeader("Member-id") Long memberId,
                                                                                @PathVariable Long tacticPostId) {

        return ResponseEntity.ok(tacticBoardService.getTacticPostCommentList(tacticPostId));
    }

    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<Void> deleteTacticPostComment(@RequestHeader("Member-id") Long memberId,
                                                        @PathVariable Long commentId) {
        tacticBoardService.deleteTacticPostComment(memberId, commentId);
        return ResponseEntity.ok().build();
    }
}
