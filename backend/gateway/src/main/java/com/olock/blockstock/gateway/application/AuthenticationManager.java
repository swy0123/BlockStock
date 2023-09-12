package com.olock.blockstock.gateway.application;

import com.olock.blockstock.gateway.dto.CustomPrincipal;
import com.olock.blockstock.gateway.exception.UnauthorizedException;
import com.olock.blockstock.gateway.persistence.MemberRepository;
import com.olock.blockstock.gateway.persistence.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class AuthenticationManager implements ReactiveAuthenticationManager {
    private final MemberRepository memberRepository;

    @Override
    public Mono<Authentication> authenticate(Authentication authentication) {
        CustomPrincipal principal = (CustomPrincipal) authentication.getPrincipal();

        return memberRepository.findById(principal.getId())
                .switchIfEmpty(Mono.error(new UnauthorizedException("잘못된 사용자입니다.")))
                .map(user -> authentication);
    }
}
