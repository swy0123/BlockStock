package com.olock.blockstock.member.domain.member.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class FollowMemberRequest {
    private long targetId;
}
