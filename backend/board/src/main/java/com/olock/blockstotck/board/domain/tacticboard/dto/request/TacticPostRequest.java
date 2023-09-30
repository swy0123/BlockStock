package com.olock.blockstotck.board.domain.tacticboard.dto.request;

import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class TacticPostRequest {
    private String title;
    private Long tacticId;
    private String imgPath;
    private String content;
}
