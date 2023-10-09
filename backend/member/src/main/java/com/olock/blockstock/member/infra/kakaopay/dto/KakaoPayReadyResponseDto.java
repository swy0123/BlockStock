package com.olock.blockstock.member.infra.kakaopay.dto;

import lombok.Data;

import java.util.Date;

@Data
public class KakaoPayReadyResponseDto {
    private String tid;
    private String next_redirect_pc_url;
    private Date created_at;
}
