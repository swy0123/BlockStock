package com.olock.blockstock.gateway.persistence.entity;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Node("Member")
@Getter
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue
    private Long id;
    private String email;
    private String password;
    private String nickname;
    private String imagePath;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    private String role;

    public void authorizeUser() {
        this.role = Role.MEMBER.name();
    }

    public Member(Long id, String email, String password, String nickname, String imagePath, String role, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.imagePath = imagePath;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    @Builder
    public Member(String email, String password, String nickname, String imagePath, String role, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.imagePath = imagePath;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

