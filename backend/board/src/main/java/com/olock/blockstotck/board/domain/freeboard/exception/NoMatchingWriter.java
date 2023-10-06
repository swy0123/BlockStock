package com.olock.blockstotck.board.domain.freeboard.exception;

public class NoMatchingWriter extends RuntimeException{
    public NoMatchingWriter(String message){
        super(message);
    }
}
