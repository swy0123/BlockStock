package com.olock.blockstock.member.domain.member.presentation;

import com.olock.blockstock.member.domain.member.application.EmailService;
import com.olock.blockstock.member.domain.member.application.MemberService;
import com.olock.blockstock.member.domain.member.dto.request.*;
import com.olock.blockstock.member.domain.member.dto.response.MemberInfoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final EmailService emailService;

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

    @PutMapping("/request-email")
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

    @PutMapping("/ticket")
    public ResponseEntity<Void> buyTicket(@RequestHeader("Member-id") Long memberId, @RequestParam("count") Integer ticketCount) {
        memberService.buyTicket(memberId, ticketCount);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/money")
    public ResponseEntity<Void> chargeMoney(@RequestHeader("Member-id") Long memberId, @RequestBody MoneyChargeRequest moneyChargeRequest) {
        memberService.chargeMoney(memberId, moneyChargeRequest);
        return ResponseEntity.ok().build();
    }


}
