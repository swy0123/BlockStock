package com.olock.blockstock.member.domain.member.presentation;

import com.olock.blockstock.member.domain.member.application.EmailService;
import com.olock.blockstock.member.domain.member.application.MemberService;
import com.olock.blockstock.member.domain.member.dto.request.*;
import com.olock.blockstock.member.domain.member.dto.response.MemberInfoResponse;
import jakarta.ws.rs.Path;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;

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

    @DeleteMapping
    public ResponseEntity<Void> deleteMember(@RequestHeader("Member-id") Long memberId) {
        memberService.delete(memberId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/profile/{memberId}")
    public ResponseEntity<InputStreamResource> profile(@PathVariable("memberId") Long memberId) throws IOException {
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(memberService.getProfile(memberId));
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
