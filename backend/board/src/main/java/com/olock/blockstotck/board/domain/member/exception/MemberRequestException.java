package com.olock.blockstotck.board.domain.member.exception;

public class MemberRequestException extends RuntimeException {
    public MemberRequestException(String message) {
        super(message);
    }

    public MemberRequestException(String message, Throwable cause) {
        super(message, cause);
    }
}
