package com.olock.blockstotck.board.domain.freeboard.dto.request;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePost;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FreeboardPostRequest {
    String title;
    String content;
}
