package com.olock.blockstock.member.infra.kakaopay.service;

import com.olock.blockstock.member.infra.kakaopay.dto.KakaoPayApprovalDto;
import com.olock.blockstock.member.infra.kakaopay.dto.KakaoPayReadyRequestDto;
import com.olock.blockstock.member.infra.kakaopay.dto.KakaoPayReadyResponseDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;

@Service
public class KakaoPayService {

    private static final String HOST = "https://kapi.kakao.com";
    private KakaoPayReadyResponseDto kakaoPayReadyResponseDto;
    private KakaoPayApprovalDto kakaoPayApprovalDto;
    @Value("${kakao.key}")
    private String ADMIN_KEY;

    public String kakaoPayReady(KakaoPayReadyRequestDto requestDto){

        RestTemplate restTemplate = new RestTemplate();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + ADMIN_KEY);
        headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");            // test 코드
        params.add("partner_order_id", "1001");
        params.add("partner_user_id", "hajin618");
        params.add("item_name", "Block Stock 자산 충전");
        params.add("quantity", "1");
        params.add("total_amount", requestDto.getTotalAmount().toString());
        params.add("tax_free_amount", "100");
        params.add("approval_url", "https://localhost:5173/mypage");
        params.add("cancel_url", "http://localhost:9090/kakaoPayCancel");
        params.add("fail_url", "http://localhost:9090/kakaoPayFail");


        // header, body 붙이기
        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);

        System.out.println("header+body setting end");

        try {
            // RestTemplate 이용 카카오 페이에 데이터 보내기
            // KakaoPayReadyDto.class : 응답 받을 객체 설정
            kakaoPayReadyResponseDto = restTemplate.postForObject(new URI(HOST + "/v1/payment/ready"), body, KakaoPayReadyResponseDto.class);

            // redirect url : 결제 완료되면 가는 주소
            return kakaoPayReadyResponseDto.getNext_redirect_pc_url();

        } catch (RestClientException e) {
            e.printStackTrace();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }

        return "/pay";
    }

    public KakaoPayApprovalDto kakaoPayInfo(String pg_token) {

        RestTemplate restTemplate = new RestTemplate();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + ADMIN_KEY);
        headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");
        params.add("tid", kakaoPayReadyResponseDto.getTid());
        params.add("partner_order_id", "1001");
        params.add("partner_user_id", "hajin618");
        params.add("pg_token", pg_token);
        params.add("total_amount", "5000");

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);

        try {
            // 응답 정보 받기 위한 dto 생성
            kakaoPayApprovalDto = restTemplate.postForObject(new URI(HOST + "/v1/payment/approve"), body, KakaoPayApprovalDto.class);

            return kakaoPayApprovalDto;

        } catch (RestClientException e) {
            e.printStackTrace();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }

        return null;
    }
}
