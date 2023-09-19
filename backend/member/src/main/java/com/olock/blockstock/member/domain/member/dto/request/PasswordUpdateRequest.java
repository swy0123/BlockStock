package com.olock.blockstock.member.domain.member.dto.request;

import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PasswordUpdateRequest {
    private String originPassword;
    private String newPassword;
    private String confirmPassword;

}
