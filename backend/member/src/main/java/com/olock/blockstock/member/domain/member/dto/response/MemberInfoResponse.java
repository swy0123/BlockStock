package com.olock.blockstock.member.domain.member.dto.response;

import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
public class MemberInfoResponse {
    private Long id;
    private String email;
    private String nickname;
    private Integer ticketCnt;
    private boolean isFollowing;
    private Long money;
    private int followerCnt;
    private int followingCnt;
    private List<String> award = new ArrayList<>(List.of("제1회 우승", "제2회 우승"));
    private LocalDateTime createdAt;

    public MemberInfoResponse(Member member, boolean isFollowing, int followerCnt, int followingCnt) {
        this.id = member.getId();
        this.email = member.getEmail();
        this.nickname = member.getNickname();
        this.ticketCnt = member.getTicketCount();
        this.money = member.getMoney();
        this.isFollowing = isFollowing;
        this.followerCnt = followerCnt;
        this.followingCnt = followingCnt;
        this.createdAt = member.getCreatedAt();
    }
}
