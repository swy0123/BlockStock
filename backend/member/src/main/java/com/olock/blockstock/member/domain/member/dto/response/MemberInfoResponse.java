package com.olock.blockstock.member.domain.member.dto.response;

import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
public class MemberInfoResponse {
    private Long id;
    private String email;
    private String nickname;
    private Integer ticketCount;
    private Long money;
    private LocalDateTime createdAt;

    public MemberInfoResponse(Member member) {
        this.id = member.getId();
        this.email = member.getEmail();
        this.nickname = member.getNickname();
        this.ticketCount = member.getTicketCount();
        this.money = member.getMoney();
        this.createdAt = member.getCreatedAt();
    }
}
