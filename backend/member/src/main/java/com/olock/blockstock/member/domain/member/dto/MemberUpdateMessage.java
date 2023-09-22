package com.olock.blockstock.member.domain.member.dto;

import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import lombok.Getter;

@Getter
public class MemberUpdateMessage {
    private String message = MessageType.UPDATE.getKey();
    private Long id;
    private String nickname;
    private Integer ticketCount;
    private Long money;

    public MemberUpdateMessage(Member member) {
        this.id = member.getId();
        this.nickname = member.getNickname();
        this.ticketCount = member.getTicketCount();
        this.money = member.getMoney();
    }

}
