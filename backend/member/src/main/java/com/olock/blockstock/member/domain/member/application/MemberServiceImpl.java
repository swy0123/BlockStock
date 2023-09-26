package com.olock.blockstock.member.domain.member.application;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.olock.blockstock.member.domain.member.dto.MemberDeleteMessage;
import com.olock.blockstock.member.domain.member.dto.MemberUpdateMessage;
import com.olock.blockstock.member.domain.member.dto.request.*;
import com.olock.blockstock.member.domain.member.dto.response.MemberInfoResponse;
import com.olock.blockstock.member.domain.member.persistence.FollowRepository;
import com.olock.blockstock.member.domain.member.persistence.MemberRepository;
import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import com.olock.blockstock.member.domain.member.persistence.entity.Role;
import com.olock.blockstock.member.global.kafka.MemberProducer;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final MemberProducer memberProducer;
    private final PasswordEncoder passwordEncoder;
    private final MemberValidator memberValidator;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final FollowRepository followRepository;

    @Override
    public void join(MemberJoinRequest memberJoinRequest) {
        memberValidator.hasSameEmail(memberJoinRequest);

        Member member = Member.builder()
                .id(memberRepository.findLastIdx())
                .email(memberJoinRequest.getEmail())
                .password(passwordEncoder.encode(memberJoinRequest.getPassword()))
                .nickname(memberJoinRequest.getNickname())
                .imagePath("/default")
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
        return new MemberInfoResponse(member, false, followRepository.findFollowerCnt(memberId), followRepository.findFollowingCnt(memberId));
    }

    @Override
    public MemberInfoResponse getInfo(Long myId, Long memberId) {
        memberValidator.existsMember(memberId);
        Member member = memberRepository.findByMemberId(memberId).get();
        boolean isFollowing = followRepository.isFollowing(myId, memberId);
        return new MemberInfoResponse(member, isFollowing, followRepository.findFollowerCnt(memberId), followRepository.findFollowingCnt(memberId));
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
    public InputStreamResource getProfile(Long memberId) {
        // TODO : S3 이미지 저장소와 연결
        String imageUrl = "https://firebasestorage.googleapis.com/v0/b/pocket-sch.appspot.com/o/user4.png?alt=media&token=a402c7d3-2f93-4a14-b291-4c143d4e450b";

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
