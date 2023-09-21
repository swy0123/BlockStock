package com.olock.blockstock.member.domain.member.application;

import com.olock.blockstock.member.domain.member.dto.request.MemberJoinRequest;
import com.olock.blockstock.member.domain.member.dto.request.MemberModifyRequest;
import com.olock.blockstock.member.domain.member.dto.request.MoneyChargeRequest;
import com.olock.blockstock.member.domain.member.dto.request.PasswordUpdateRequest;
import com.olock.blockstock.member.domain.member.dto.response.MemberInfoResponse;

public interface MemberService {
    void join(MemberJoinRequest memberJoinRequest);

    MemberInfoResponse getInfo(Long memberId);

    void modify(Long memberId, MemberModifyRequest memberModifyRequest);
    void updatePassword(Long memberId, PasswordUpdateRequest passwordUpdateRequest);

    void buyTicket(Long memberId, int ticketCount);

    void chargeMoney(Long memberId, MoneyChargeRequest moneyChargeRequest);
}
