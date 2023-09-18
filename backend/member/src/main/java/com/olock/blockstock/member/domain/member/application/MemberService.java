package com.olock.blockstock.member.domain.member.application;

import com.olock.blockstock.member.domain.member.dto.request.EmailSendRequest;
import com.olock.blockstock.member.domain.member.dto.request.MemberJoinRequest;
import com.olock.blockstock.member.domain.member.dto.response.MemberInfoResponse;

public interface MemberService {
    void join(MemberJoinRequest memberJoinRequest);

    MemberInfoResponse getInfo(Long memberId);
}
