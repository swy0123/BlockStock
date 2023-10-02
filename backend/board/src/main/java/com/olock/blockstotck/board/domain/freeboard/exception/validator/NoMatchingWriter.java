package com.olock.blockstotck.board.domain.freeboard.exception.validator;

public class NoMatchingWriter extends RuntimeException{
    public NoMatchingWriter(String message){
        super(message);
    }
}
