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

    public Mono<Member> getMemberById(Long id) {
        return memberRepository.findByMemberId(id);
    }

    public Mono<Member> getMemberByEmail(String email) {
        return memberRepository.findByEmail(email);
    }
}
