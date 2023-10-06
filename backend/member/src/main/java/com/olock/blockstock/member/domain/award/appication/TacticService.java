package com.olock.blockstock.member.domain.award.appication;

import java.util.List;

public interface TacticService {
    void updateContestResult(Long contestId, String contestTitle, List<Long> memberIds, List<Long> results);

    void participateContest(Long memberId, Integer ticketCnt);
}
