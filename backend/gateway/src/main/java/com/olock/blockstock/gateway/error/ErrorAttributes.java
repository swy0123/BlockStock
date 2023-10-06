package com.olock.blockstock.gateway.error;

import com.olock.blockstock.gateway.exception.AuthException;
import com.olock.blockstock.gateway.exception.UnauthorizedException;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.reactive.error.DefaultErrorAttributes;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@Component
public class ErrorAttributes extends DefaultErrorAttributes {
    private HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

    public ErrorAttributes() {
        super();
    }

    @Override
    public Map<String, Object> getErrorAttributes(ServerRequest request, ErrorAttributeOptions options) {
        var errorAttributes = super.getErrorAttributes(request, ErrorAttributeOptions.defaults());
        var error = getError(request);

        var errorMap = new LinkedHashMap<String, Object>();
        var errorList = new ArrayList<Map<String, Object>>();

        if (error instanceof UnauthorizedException
                || error instanceof ExpiredJwtException
                || error instanceof SignatureException
                || error instanceof MalformedJwtException) {
            status = HttpStatus.UNAUTHORIZED;

            if (error instanceof UnauthorizedException){
                errorMap.put("code", ((UnauthorizedException) error).getErrorCode());
            } else {
                errorMap.put("code", "JWT_ERROR");
            }
            errorMap.put("message", error.getMessage());

            errorList.add(errorMap);
        } else if (error instanceof AuthException) {
            status = HttpStatus.BAD_REQUEST;

            errorMap.put("code", ((AuthException) error).getErrorCode());
            errorMap.put("message", error.getMessage());

            errorList.add(errorMap);
        } else {
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            var message = error.getMessage();

            if (message == null)
                message = error.getClass().getName();

            errorMap.put("code", "INTERNAL_SERVER_ERROR");
            errorMap.put("message", message);
            errorList.add(errorMap);
        }

        var errors = new HashMap<String, Object>();
        errors.put("errors", errorList);

        errorAttributes.put("status", status.value());
        errorAttributes.put("errors", errors);

        return errorAttributes;
    }
}
