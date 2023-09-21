package com.olock.blockstock.member.domain.member.application;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.olock.blockstock.member.domain.member.dto.request.*;
import com.olock.blockstock.member.domain.member.dto.response.MemberInfoResponse;
import com.olock.blockstock.member.domain.member.persistence.FollowRepository;
import com.olock.blockstock.member.domain.member.persistence.MemberRepository;
import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import com.olock.blockstock.member.domain.member.persistence.entity.Role;
import com.olock.blockstock.member.global.kafka.MemberProducer;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
        return new MemberInfoResponse(member, followRepository.findFollowerCnt(memberId), followRepository.findFollowingCnt(memberId));
    }

    @Override
    public void modify(Long memberId, MemberModifyRequest memberModifyRequest) {
        memberValidator.existsMember(memberId);
        memberRepository.updateNickname(memberId, memberModifyRequest.getNickname());
        produceMessage(memberId);
    }

    @Override
    public void updatePassword(Long memberId, PasswordUpdateRequest passwordUpdateRequest) {
        memberValidator.canUpdatePassword(memberId, passwordUpdateRequest);
        memberRepository.updatePassword(memberId, passwordEncoder.encode(passwordUpdateRequest.getNewPassword()));
        produceMessage(memberId);
    }

    @Override
    public void buyTicket(Long memberId, int ticketCount) {
        memberValidator.existsMember(memberId);
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

    @Async
    private void produceMessage(Long memberId) {
        try {
            Member member = memberRepository.findByMemberId(memberId).get();
            memberProducer.sendMessage(objectMapper.writeValueAsString(member));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

}
