package com.olock.blockstotck.board.domain.member.application;

import com.olock.blockstotck.board.domain.member.persistance.Member;

public interface MemberService {
    Member getMember(Long memberId);
    void addMember(Long memberId);
    void updateMember(Member member);
}
