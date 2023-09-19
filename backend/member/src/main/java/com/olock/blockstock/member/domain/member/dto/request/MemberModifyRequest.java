package com.olock.blockstock.member.domain.member.dto.request;

import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class MemberModifyRequest {
    private String nickname;
}
