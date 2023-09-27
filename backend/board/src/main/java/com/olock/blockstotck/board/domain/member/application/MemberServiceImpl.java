package com.olock.blockstotck.board.domain.member.application;

import com.olock.blockstotck.board.domain.member.dto.MemberTopicMessage;
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
        if(!memberRepository.existsById(memberId.toString())) {
            memberRepository.save(requestMember(memberId));
        }

        return memberRepository.findById(memberId.toString()).get();
    }

    @Override
    public void saveMember(Long memberId) {
        memberRepository.save(requestMember(memberId));
    }

    @Override
    public void updateMember(MemberTopicMessage memberTopicMessage) {
        if(!memberRepository.existsById(memberTopicMessage.getId().toString())) return;
        memberRepository.save(new Member(memberTopicMessage));
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
