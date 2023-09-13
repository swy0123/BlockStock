package com.olock.blockstock.gateway.application;

import com.olock.blockstock.gateway.dto.request.MemberJoinRequest;
import com.olock.blockstock.gateway.persistence.MemberRepository;
import com.olock.blockstock.gateway.persistence.entity.Member;
import com.olock.blockstock.gateway.persistence.entity.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public void register(MemberJoinRequest memberJoinRequest) {
        // TODO : Validator 넣기
        Member member = Member.builder()
                .email(memberJoinRequest.getEmail())
                .password(passwordEncoder.encode(memberJoinRequest.getPassword()))
                .nickname(memberJoinRequest.getNickname())
                .imagePath(memberJoinRequest.getImagePath())
                .role(Role.MEMBER.name())
                .createdAt(LocalDateTime.now())
                .createdAt(LocalDateTime.now())
                .build();

        System.out.println(member.getId() + " " + member.getNickname() + " " + member.getRole() + " " + member.getCreatedAt());

        memberRepository.save(member).subscribe(savedMember -> {
            System.out.println("회원가입 완료");
        });
    }

    public Mono<Member> getMemberById(Long id) {
        return memberRepository.findById(id);
    }

    public Mono<Member> getMemberByEmail(String email) {
        return memberRepository.findByEmail(email);
    }
}
