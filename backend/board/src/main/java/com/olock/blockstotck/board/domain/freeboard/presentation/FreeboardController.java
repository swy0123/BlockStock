package com.olock.blockstotck.board.domain.freeboard.presentation;

import com.olock.blockstotck.board.domain.freeboard.application.FreeboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/free-board")
@RequiredArgsConstructor
public class FreeboardController {

    private final FreeboardService freeboardService;
}
