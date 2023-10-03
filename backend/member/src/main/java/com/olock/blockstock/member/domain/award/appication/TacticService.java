package com.olock.blockstock.member.domain.award.appication;

import com.olock.blockstock.member.domain.award.dto.TacticTopicMessage;

import java.util.List;

public interface TacticService {
    void updateContestResult(String contestTitle, List<Long> memberIds, List<Long> results);
}
