package com.olock.blockstotck.board.domain.freeboard.exception;

import com.olock.blockstotck.board.domain.tacticboard.exception.NoExistTacticPostComment;

public class NoExistFreePostComment extends RuntimeException{
    public NoExistFreePostComment(String message){
        super(message);
    }
}
