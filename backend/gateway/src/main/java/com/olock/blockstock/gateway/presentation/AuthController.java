package com.olock.blockstock.gateway.presentation;

import com.olock.blockstock.gateway.application.AuthService;
import com.olock.blockstock.gateway.application.JwtTokenService;
import com.olock.blockstock.gateway.dto.CustomPrincipal;
import com.olock.blockstock.gateway.dto.request.AuthLoginRequest;
import com.olock.blockstock.gateway.dto.request.MemberJoinRequest;
import com.olock.blockstock.gateway.dto.response.AuthLoginResponse;
import com.olock.blockstock.gateway.persistence.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final JwtTokenService jwtTokenService;
    private final AuthService authService;


    @PostMapping("/join")
    public void register(@RequestBody MemberJoinRequest memberJoinRequest) {
        authService.register(memberJoinRequest);
    }

    @PostMapping("/login")
    public Mono<AuthLoginResponse> login(@RequestBody AuthLoginRequest authLoginRequest) {
        return jwtTokenService.login(authLoginRequest);
    }

    @GetMapping("/info")
    public Mono<Member> getUserInfo(Authentication authentication) {
        CustomPrincipal customPrincipal = (CustomPrincipal) authentication.getPrincipal();
        return authService.getMemberById(customPrincipal.getId());
    }
}
