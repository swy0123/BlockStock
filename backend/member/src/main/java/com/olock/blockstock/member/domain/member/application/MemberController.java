package com.olock.blockstock.member.domain.member.application;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/member")
public class MemberController {

    @GetMapping("/info")
    public String info() {
        return "hell0";
    }

    @GetMapping("/detail")
    public String detail(HttpServletRequest httpServletRequest) {
        return httpServletRequest.getHeader("Authorization");
    }
}
