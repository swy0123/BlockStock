package com.olock.blockstock.member.domain.member.application;

import com.olock.blockstock.member.domain.member.dto.request.MemberJoinRequest;
import com.olock.blockstock.member.domain.member.exception.DuplicateEmailException;
import com.olock.blockstock.member.domain.member.exception.NoMemberException;
import com.olock.blockstock.member.domain.member.persistence.MemberRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class MemberValidator {
    private final MemberRepository memberRepository;

    public void validateDuplicateEmail(MemberJoinRequest memberJoinRequest) {
        if (memberRepository.existsByEmail(memberJoinRequest.getEmail())) {
            throw new DuplicateEmailException("중복 이메일");
        }
    }

    public void validateExistsMember(Long memberId) {
        if (!memberRepository.existsByMemberId(memberId)) {
            throw new NoMemberException("존재하지 않는 회원입니다");
        }
    }
}