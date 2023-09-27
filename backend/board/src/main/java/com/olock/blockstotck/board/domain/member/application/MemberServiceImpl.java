package com.olock.blockstotck.board.domain.member.application;

import com.olock.blockstotck.board.domain.member.exception.MemberRequestException;
import com.olock.blockstotck.board.domain.member.persistance.Member;
import com.olock.blockstotck.board.domain.member.persistance.MemberRepository;
import com.olock.blockstotck.board.infra.member.WebClientUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final WebClientUtil webClientUtil;

    @Override
    public Member getMember(Long memberId) {
        return requestMember(memberId);
    }

    @Override
    public void addMember(Long memberId) {

    }

    @Override
    public void updateMember(Member member) {

    }

    private Member requestMember(Long memberId) {
        Member member = null;
        try {
            member = webClientUtil.get(
                    "https://j9b210.p.ssafy.io:64412/api/member",
                    memberId,
                    Member.class
            );
        } catch (MemberRequestException e) {
            throw new MemberRequestException("사용자 정보 요청 실패");
        }

        return member;
    }
}
