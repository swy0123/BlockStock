package com.olock.blockstock.member.domain.member.application;

import com.olock.blockstock.member.domain.member.dto.request.MemberJoinRequest;
import com.olock.blockstock.member.domain.member.dto.request.MemberModifyRequest;
import com.olock.blockstock.member.domain.member.dto.request.MoneyChargeRequest;
import com.olock.blockstock.member.domain.member.dto.request.PasswordUpdateRequest;
import com.olock.blockstock.member.domain.member.dto.response.MemberInfoResponse;
import org.springframework.core.io.InputStreamResource;

public interface MemberService {
    void join(MemberJoinRequest memberJoinRequest);

    MemberInfoResponse getInfo(Long memberId);
    MemberInfoResponse getInfo(Long myId, Long memberId);

    void modify(Long memberId, MemberModifyRequest memberModifyRequest);

    void delete(Long memberId);
    void updatePassword(Long memberId, PasswordUpdateRequest passwordUpdateRequest);

    void buyTicket(Long memberId, int ticketCount);

    void chargeMoney(Long memberId, MoneyChargeRequest moneyChargeRequest);

    InputStreamResource getProfile(Long memberId);
}
