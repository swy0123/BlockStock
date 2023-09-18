package com.olock.blockstock.member.domain.member.application;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.olock.blockstock.member.domain.member.dto.request.EmailSendRequest;
import com.olock.blockstock.member.domain.member.dto.request.MemberJoinRequest;
import com.olock.blockstock.member.domain.member.dto.response.MemberInfoResponse;
import com.olock.blockstock.member.domain.member.exception.DuplicateEmailException;
import com.olock.blockstock.member.domain.member.exception.NoMemberException;
import com.olock.blockstock.member.domain.member.persistence.MemberRepository;
import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import com.olock.blockstock.member.domain.member.persistence.entity.Role;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.MailException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final MemberProducer memberProducer;
    private final PasswordEncoder passwordEncoder;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void join(MemberJoinRequest memberJoinRequest) {

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
        Member member = memberRepository.findByMemberId(memberId)
                .orElseThrow(() -> new NoMemberException("존재하지 않는 회원입니다"));

        return new MemberInfoResponse(member);
    }
}
