package com.olock.blockstock.member.domain.member.presentation;

import com.olock.blockstock.member.domain.member.application.EmailService;
import com.olock.blockstock.member.domain.member.application.MemberService;
import com.olock.blockstock.member.domain.member.dto.request.*;
import com.olock.blockstock.member.domain.member.dto.response.MemberInfoResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final EmailService emailService;

    @GetMapping("/info")
    public String info() {
        return "hell0";
    }

    @GetMapping("/detail")
    public String detail(HttpServletRequest httpServletRequest) {
        return httpServletRequest.getHeader("Authorization");
    }

    @PostMapping
    public ResponseEntity<Void> join(@RequestBody MemberJoinRequest memberJoinRequest) {
        memberService.join(memberJoinRequest);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<MemberInfoResponse> detail(@RequestHeader("Member-id") Long memberId) {
        return ResponseEntity.ok(memberService.getInfo(memberId));
    }

    @PutMapping
    public ResponseEntity<Void> modifyNickname(@RequestHeader("Member-id") Long memberId, @RequestBody MemberModifyRequest memberModifyRequest) {
        memberService.modify(memberId, memberModifyRequest);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/password")
    public ResponseEntity<Void> updatePassword(@RequestHeader("Member-id") Long memberId, @RequestBody PasswordUpdateRequest passwordUpdateRequest) {
        memberService.updatePassword(memberId, passwordUpdateRequest);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/request-email/password")
    public ResponseEntity<Void> requestPasswordEmail(@RequestBody EmailSendRequest emailSendRequest) {
        emailService.sendPasswordEmail(emailSendRequest);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/request-email")
    public ResponseEntity<Void> requestEmail(@RequestBody EmailSendRequest emailSendRequest) {
        emailService.sendEmail(emailSendRequest);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/confirm-email")
    public ResponseEntity<Void> confirmEmail(@RequestBody EmailConfirmRequest emailConfirmRequest) {
        emailService.confirmEmail(emailConfirmRequest);
        return ResponseEntity.ok().build();
    }


}
