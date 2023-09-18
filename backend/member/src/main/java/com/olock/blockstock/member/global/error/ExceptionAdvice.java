package com.olock.blockstock.member.global.error;

import com.olock.blockstock.member.domain.member.exception.NoEmailException;
import com.olock.blockstock.member.domain.member.exception.WrongTokenException;
import com.olock.blockstock.member.global.error.dto.ErrorCode;
import com.olock.blockstock.member.global.error.dto.ErrorStatus;
import com.olock.blockstock.member.global.error.dto.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler({WrongTokenException.class, NoEmailException.class})
    public ResponseEntity<ErrorResponse> handleException() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.WRONG_EMAIL, "잘못된 이메일 인증입니다");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.INVALID_REQUEST.getValue())).body(errorResponse);
    }
}