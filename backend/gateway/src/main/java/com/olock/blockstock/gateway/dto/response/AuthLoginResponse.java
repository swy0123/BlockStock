package com.olock.blockstock.gateway.dto.response;

import com.fasterxml.jackson.databind.annotation.JsonNaming;
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
    private Date issuedAt;
    private Date expiresAt;

}
