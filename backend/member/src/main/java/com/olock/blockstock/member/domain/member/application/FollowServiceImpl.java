package com.olock.blockstock.member.domain.member.application;

import com.olock.blockstock.member.domain.member.dto.request.FollowMemberRequest;
import com.olock.blockstock.member.domain.member.dto.response.FollowMemberResponse;
import com.olock.blockstock.member.domain.member.persistence.FollowRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService {
    private final FollowRepository followRepository;

    @Override
    public int getFollowerCnt(Long memberId) {
        return 0;
    }

    @Override
    public int getFollowingCnt(Long memberId) {
        return 0;
    }

    @Override
    public void follow(Long memberId, FollowMemberRequest followMemberRequest) {
        followRepository.follow(memberId, followMemberRequest.getTargetId());
    }

    @Override
    public void unfollow(Long memberId, Long targetId) {
        followRepository.unfollow(memberId, targetId);
    }

    @Override
    public List<FollowMemberResponse> getFollowers(Long myId, Long targetId) {
        return null;
    }

    @Override
    public List<FollowMemberResponse> getFollowings(Long myId, Long targetId) {
        return null;
    }
}