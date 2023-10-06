package com.olock.blockstock.member.domain.member.application;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.olock.blockstock.member.domain.award.appication.TacticService;
import com.olock.blockstock.member.domain.award.persistence.AwardRepository;
import com.olock.blockstock.member.domain.award.persistence.entity.Award;
import com.olock.blockstock.member.domain.member.dto.MemberDeleteMessage;
import com.olock.blockstock.member.domain.member.dto.MemberUpdateMessage;
import com.olock.blockstock.member.domain.member.dto.request.*;
import com.olock.blockstock.member.domain.member.dto.response.MemberInfoResponse;
import com.olock.blockstock.member.domain.member.persistence.FollowRepository;
import com.olock.blockstock.member.domain.member.persistence.MemberRepository;
import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import com.olock.blockstock.member.domain.member.persistence.entity.Role;
import com.olock.blockstock.member.global.kafka.MemberProducer;
import com.olock.blockstock.member.infra.s3.S3Uploader;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final AwardRepository awardRepository;
    private final MemberProducer memberProducer;
    private final PasswordEncoder passwordEncoder;
    private final MemberValidator memberValidator;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final FollowRepository followRepository;
    private final S3Uploader s3Uploader;

    @Override
    public void join(MemberJoinRequest memberJoinRequest) {
        memberValidator.hasSameEmail(memberJoinRequest);

        Member member = Member.builder()
                .id(memberRepository.findLastIdx())
                .email(memberJoinRequest.getEmail())
                .password(passwordEncoder.encode(memberJoinRequest.getPassword()))
                .nickname(memberJoinRequest.getNickname())
                .imagePath("http://blockstock.bucket.s3.ap-northeast-2.amazonaws.com/member/5c8c4bfe-5496-435c-85ee-dec6c22e7071user4.png")
                .role(Role.MEMBER.name())
                .createdAt(LocalDateTime.now())
                .createdAt(LocalDateTime.now())
                .build();

        memberRepository.save(member);
        memberRepository.updateLastIdx();
        try {
            memberProducer.sendMessage(objectMapper.writeValueAsString(member));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public MemberInfoResponse getInfo(Long memberId) {
        memberValidator.existsMember(memberId);
        Member member = memberRepository.findByMemberId(memberId).get();
        List<String> awards = awardRepository.findAwardTitlesByMemberId(memberId).stream().map(award -> award.getName()).collect(Collectors.toList());
        return new MemberInfoResponse(member, awards, false, followRepository.findFollowerCnt(memberId), followRepository.findFollowingCnt(memberId));
    }

    @Override
    public MemberInfoResponse getInfo(Long myId, Long memberId) {
        memberValidator.existsMember(memberId);
        Member member = memberRepository.findByMemberId(memberId).get();
        boolean isFollowing = followRepository.isFollowing(myId, memberId);
        List<String> awards = awardRepository.findAwardTitlesByMemberId(memberId).stream().map(award -> award.getName()).collect(Collectors.toList());
        return new MemberInfoResponse(member, awards, isFollowing, followRepository.findFollowerCnt(memberId), followRepository.findFollowingCnt(memberId));
    }

    @Override
    public void modify(Long memberId, MemberModifyRequest memberModifyRequest) {
        memberValidator.existsMember(memberId);
        memberRepository.updateNickname(memberId, memberModifyRequest.getNickname());
        produceMessage(memberId);
    }

    @Override
    public void delete(Long memberId) {
        memberValidator.existsMember(memberId);
        memberRepository.deleteByMemberId(memberId);
        produceMessage(new MemberDeleteMessage(memberId));
    }

    @Override
    public void updatePassword(Long memberId, PasswordUpdateRequest passwordUpdateRequest) {
        memberValidator.canUpdatePassword(memberId, passwordUpdateRequest);
        memberRepository.updatePassword(memberId, passwordEncoder.encode(passwordUpdateRequest.getNewPassword()));
        produceMessage(memberId);
    }

    @Override
    public void buyTicket(Long memberId, int ticketCount) {
        memberValidator.canBuyTicket(memberId, ticketCount);
        memberRepository.updateMoney(memberId, ticketCount * (-10000000L));
        memberRepository.updateTicket(memberId, ticketCount);
        produceMessage(memberId);
    }

    @Override
    public void chargeMoney(Long memberId, MoneyChargeRequest moneyChargeRequest) {
        memberValidator.existsMember(memberId);
        memberRepository.updateMoney(memberId, moneyChargeRequest.getMoney());
        produceMessage(memberId);
    }

    @Override
    public void updateProfileImage(Long memberId, MultipartFile file) {
        try {
            String fileName = s3Uploader.upload(file, "member");
            memberRepository.updateProfileImage(memberId, fileName);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public InputStreamResource getProfile(Long memberId) {
        String imageUrl = memberRepository.findByMemberId(memberId).get().getImagePath();
        imageUrl = imageUrl.replaceAll("https", "http");
        if (imageUrl.equals("/default")) imageUrl = "http://blockstock.bucket.s3.ap-northeast-2.amazonaws.com/member/5c8c4bfe-5496-435c-85ee-dec6c22e7071user4.png";
        URL url = null;
        InputStream in = null;
        try {
            url = new URL(imageUrl);
            URLConnection connection = url.openConnection();
            connection.setDoOutput(true);
            in = connection.getInputStream();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return new InputStreamResource(in);
    }

    @Async
    private void produceMessage(Long memberId) {
        try {
            Member member = memberRepository.findByMemberId(memberId).get();
            memberProducer.sendMessage(objectMapper.writeValueAsString(new MemberUpdateMessage(member)));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @Async
    private void produceMessage(MemberDeleteMessage memberDeleteMessage) {
        try {
            memberProducer.sendMessage(objectMapper.writeValueAsString(memberDeleteMessage));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }


}
