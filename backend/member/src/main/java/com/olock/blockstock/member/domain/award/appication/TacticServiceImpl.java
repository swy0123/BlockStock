package com.olock.blockstock.member.domain.award.appication;

import com.olock.blockstock.member.domain.award.dto.TacticTopicMessage;
import com.olock.blockstock.member.domain.member.application.MemberService;
import com.olock.blockstock.member.domain.member.persistence.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TacticServiceImpl implements TacticService {

    private final MemberRepository memberRepository;
    private final Long firstReward = 50000000L;
    private final Long secondReward = 30000000L;
    @Override
    public void updateContestResult(String contestTitle, List<Long> memberIds, List<Long> results) {
        updateMemberMoney(memberIds, results);
        giveAward(memberIds.get(0), results.get(0), contestTitle + " 우승", firstReward);
        giveAward(memberIds.get(1), results.get(1), contestTitle + " 준우승", secondReward);
    }

    @Async
    private void giveAward(Long memberId, Long result, String awardName, Long reward) {


    }

    private void updateMemberMoney(List<Long> memberIds, List<Long> results) {
        for (int i = 0; i < memberIds.size(); i++) {
            memberRepository.updateMoney(memberIds.get(i), results.get(i));
        }
    }
}
