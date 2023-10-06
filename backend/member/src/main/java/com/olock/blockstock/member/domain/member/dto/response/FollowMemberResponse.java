package com.olock.blockstock.member.domain.member.dto.response;

import lombok.Getter;

@Getter
public class FollowMemberResponse {
    private long id;
    private String nickname;
    private boolean isFollowing;
}
