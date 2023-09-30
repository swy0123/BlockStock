package com.olock.blockstotck.board.domain.tacticboard.presentation;

import com.olock.blockstotck.board.domain.tacticboard.application.TacticBoardService;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequest;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequestParam;
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

}
