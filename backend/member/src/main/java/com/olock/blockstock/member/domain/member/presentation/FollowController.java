package com.olock.blockstock.member.domain.member.presentation;

import com.olock.blockstock.member.domain.member.application.FollowService;
import com.olock.blockstock.member.domain.member.dto.request.FollowMemberRequest;
import com.olock.blockstock.member.domain.member.dto.response.FollowMemberResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class FollowController {
    private final FollowService followService;

    @PostMapping("/follow")
    public ResponseEntity<Void> follow(@RequestHeader("Member-id") Long memberId, @RequestBody FollowMemberRequest followMemberRequest) {
        followService.follow(memberId, followMemberRequest);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/unfollow")
    public ResponseEntity<Void> unfollow(@RequestHeader("Member-id") Long memberId, @RequestBody FollowMemberRequest followMemberRequest) {
        followService.unfollow(memberId, followMemberRequest);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/follower")
    public ResponseEntity<List<FollowMemberResponse>> getMyFollowers(@RequestHeader("Member-id") Long myId) {
        return ResponseEntity.ok(followService.getFollowers(myId, myId));
    }

    @GetMapping("/following")
    public ResponseEntity<List<FollowMemberResponse>> getMyFollowings(@RequestHeader("Member-id") Long myId) {
        return ResponseEntity.ok(followService.getFollowings(myId, myId));
    }

    @GetMapping("/{targetId}/follower")
    public ResponseEntity<List<FollowMemberResponse>> getFollowers(@RequestHeader("Member-id") Long myId, @PathVariable("targetId") Long targetId) {
        return ResponseEntity.ok(followService.getFollowers(myId, targetId));
    }

    @GetMapping("/{targetId}/following")
    public ResponseEntity<List<FollowMemberResponse>> getFollowings(@RequestHeader("Member-id") Long memberId, @PathVariable("targetId") Long targetId) {
        return ResponseEntity.ok(followService.getFollowings(memberId, targetId));
    }

}
