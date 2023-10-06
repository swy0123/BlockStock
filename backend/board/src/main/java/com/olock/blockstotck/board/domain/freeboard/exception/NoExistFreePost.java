package com.olock.blockstotck.board.domain.freeboard.exception;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;


public class NoExistFreePost extends RuntimeException {
    public NoExistFreePost(String message){
        super(message);
    }
}
