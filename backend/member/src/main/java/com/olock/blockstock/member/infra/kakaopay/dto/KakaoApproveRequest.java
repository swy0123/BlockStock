package com.olock.blockstock.member.infra.kakaopay.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class KakaoApproveRequest {
    private String cid;
    private String tid;
    private String partner_order_id;
    private String partner_user_id;
    private String pg_token;
}
