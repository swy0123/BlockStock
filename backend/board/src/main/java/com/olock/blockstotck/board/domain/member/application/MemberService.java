package com.olock.blockstotck.board.domain.member.application;

import com.olock.blockstotck.board.domain.member.dto.MemberTopicMessage;
import com.olock.blockstotck.board.domain.member.persistance.Member;

public interface MemberService {
    Member getMember(Long memberId);
    void saveMember(Long memberId);
    void updateMember(MemberTopicMessage memberTopicMessage);
}
