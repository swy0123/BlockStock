package com.olock.blockstock.member.domain.member.application;

import com.olock.blockstock.member.domain.member.dto.request.MemberJoinRequest;
import com.olock.blockstock.member.domain.member.dto.request.PasswordUpdateRequest;
import com.olock.blockstock.member.domain.member.exception.DuplicateEmailException;
import com.olock.blockstock.member.domain.member.exception.LessMoneyException;
import com.olock.blockstock.member.domain.member.exception.NoMemberException;
import com.olock.blockstock.member.domain.member.exception.WrongConfirmException;
import com.olock.blockstock.member.domain.member.persistence.MemberRepository;
import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.swing.text.html.Option;
import java.util.Optional;

@RequiredArgsConstructor
@Component
public class MemberValidator {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public void hasSameEmail(MemberJoinRequest memberJoinRequest) {
        if (memberRepository.existsByEmail(memberJoinRequest.getEmail())) {
            throw new DuplicateEmailException("중복 이메일");
        }
    }

    public void existsMember(Long memberId) {
        if (!memberRepository.existsByMemberId(memberId)) {
            throw new NoMemberException("존재하지 않는 회원입니다");
        }
    }

    public void canUpdatePassword(Long memberId, PasswordUpdateRequest passwordUpdateRequest) {
        if (!passwordEncoder.matches(passwordUpdateRequest.getOriginPassword(), memberRepository.findByMemberId(memberId).get().getPassword())) {
            throw new WrongConfirmException("기존 비밀번호가 틀렸습니다");
        }

        if (!passwordUpdateRequest.getNewPassword().equals(passwordUpdateRequest.getConfirmPassword())) {
            throw new WrongConfirmException("비밀번호 확인이 틀렸습니다");
        }
    }

    public void canBuyTicket(Long memberId, int ticketCount) {
        Optional<Member> member = memberRepository.findByMemberId(memberId);
        if (member.isEmpty()) {
            throw new NoMemberException("기존 비밀번호가 틀렸습니다");
        }

        if (member.get().getMoney() < ticketCount * 10000000L) {
            throw new LessMoneyException("자본이 부족합니다");
        }
    }

    public void canUseTicket(Long memberId, int ticketCount) {
        Member member = memberRepository.findByMemberId(memberId).get();
        if (member.getTicketCount() < ticketCount) {
            throw new LessMoneyException("티켓이 부족합니다");
        }
    }
}