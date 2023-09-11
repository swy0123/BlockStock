package com.olock.blockstock.member.domain.member.persistence.entity;

import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
@Node("Member")
@Getter
@NoArgsConstructor
public class Member {
    @Id
    private Long id;
    private String email;
    private String password;
    private String nickname;
    private String imagePath;

    private String role;

    public void authorizeUser() {
        this.role = Role.MEMBER.name();
    }

    public void passwordEncode(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(this.password);
    }

    @Builder
    public Member(String email, String password, String nickname, String imagePath, String role) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.imagePath = imagePath;
        this.role = role;
    }
}
