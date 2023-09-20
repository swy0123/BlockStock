package com.olock.blockstock.member.domain.member.application;

import com.olock.blockstock.member.domain.member.dto.request.FollowMemberRequest;
import com.olock.blockstock.member.domain.member.dto.response.FollowMemberResponse;

import java.util.List;

public interface FollowService {
    int getFollowerCnt(Long memberId);

    int getFollowingCnt(Long memberId);

    void follow(Long memberId, FollowMemberRequest followMemberRequest);

    void unfollow(Long memberId, Long target);

    List<FollowMemberResponse> getFollowers(Long myId, Long targetId);

    List<FollowMemberResponse> getFollowings(Long myId, Long targetId);
}
