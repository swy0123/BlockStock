package com.olock.blockstotck.board.domain.tacticboard.presentation;

import com.olock.blockstotck.board.domain.tacticboard.application.TacticBoardService;
import com.olock.blockstotck.board.domain.tacticboard.dto.request.TacticPostRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

}
