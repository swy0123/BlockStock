package com.olock.blockstock.member.domain.member.application;

import com.olock.blockstock.member.domain.member.dto.request.FollowMemberRequest;

public interface FollowService {
    void follow(Long memberId, FollowMemberRequest followMemberRequest);
}
