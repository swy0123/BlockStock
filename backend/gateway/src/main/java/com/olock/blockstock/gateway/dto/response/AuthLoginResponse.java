package com.olock.blockstock.gateway.dto.response;

import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.olock.blockstock.gateway.dto.TokenDetails;
import io.netty.handler.codec.socksx.v4.Socks4CommandRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthLoginResponse {
    private Long memberId;
    private String accessToken;
    private String refreshToken;

    public AuthLoginResponse(TokenDetails tokenDetails) {
        this.memberId = tokenDetails.getMemberId();
        this.accessToken = tokenDetails.getAccessToken();
        this.refreshToken = tokenDetails.getRefreshToken();
    }
}
