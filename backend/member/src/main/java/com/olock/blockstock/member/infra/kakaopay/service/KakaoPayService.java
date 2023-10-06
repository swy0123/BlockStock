package com.olock.blockstock.member.infra.kakaopay.service;

import com.olock.blockstock.member.infra.kakaopay.dto.KakaoApproveRequest;
import com.olock.blockstock.member.infra.kakaopay.dto.KakaoApproveResponse;
import com.olock.blockstock.member.infra.kakaopay.dto.KakaoReadyRequest;
import com.olock.blockstock.member.infra.kakaopay.dto.KakaoReadyResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class KakaoPayService {
    private final KakaoClientUtil kakaoClientUtil;

    static final String cid = "BLOCKSTOCK";
    private KakaoReadyResponse kakaoReady;

    public KakaoReadyResponse kakaoPayReady() {
        kakaoReady = kakaoClientUtil.post(
                "https://kapi.kakao.com/v1/payment/ready",
                getReadyRequest(),
                KakaoReadyResponse.class);
        return kakaoReady;
    }

    public KakaoApproveResponse ApproveResponse(String pgToken) {
        KakaoApproveResponse approveResponse = kakaoClientUtil.post(
                "https://kapi.kakao.com/v1/payment/approve",
                getApproveRequest(pgToken),
                KakaoApproveResponse.class);

        return approveResponse;
    }

    private KakaoReadyRequest getReadyRequest() {
        KakaoReadyRequest request = new KakaoReadyRequest();
        request.setCid(cid);
        request.setPartner_order_id("가맹점 주문 번호");
        request.setPartner_user_id("가맹점 회원 ID");
        request.setItem_name("상품명");
        request.setQuantity("주문 수량");
        request.setTotal_amount("총 금액");
        request.setVat_amount("부가세");
        request.setTax_free_amount("상품 비과세 금액");
        request.setApproval_url("https://localhost:5173/mypage");
        request.setCancel_url("https://localhost:5173/mypage");
        request.setFail_url("https://localhost:5173/mypage");

        return request;
    }

    private KakaoApproveRequest getApproveRequest(String pgToken) {
        KakaoApproveRequest request = new KakaoApproveRequest();
        request.setCid(cid);
        request.setTid(kakaoReady.getTid());
        request.setPartner_order_id("가맹점 주문 번호");
        request.setPartner_user_id("가맹점 회원 ID");
        request.setPg_token(pgToken);
        return request;
    }
}
