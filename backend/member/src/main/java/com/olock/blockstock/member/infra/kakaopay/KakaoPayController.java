package com.olock.blockstock.member.infra.kakaopay;

import com.olock.blockstock.member.infra.kakaopay.dto.KakaoPayApprovalDto;
import com.olock.blockstock.member.infra.kakaopay.dto.KakaoPayReadyRequestDto;
import com.olock.blockstock.member.infra.kakaopay.service.KakaoPayService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

public class KakaoPayController {

    @Setter(onMethod_ = @Autowired)
    private KakaoPayService kakaoPayService;

    @PostMapping("/payReady")
    public ResponseEntity<String> kakaoPay(KakaoPayReadyRequestDto requestDto){

        return ResponseEntity.ok(kakaoPayService.kakaoPayReady(requestDto));
    }

    @GetMapping("/payInfo")
    public ResponseEntity<KakaoPayApprovalDto> paySuccess(@RequestParam("pg_token") String pg_token){

        return ResponseEntity.ok(kakaoPayService.kakaoPayInfo(pg_token));
    }
}