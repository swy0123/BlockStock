package com.olock.blockstock.gateway.domain.auth.presentation;

import com.olock.blockstock.gateway.domain.auth.dto.request.AuthLoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestBody AuthLoginRequest authLoginRequest) {
        System.out.println(authLoginRequest.getEmail() + " " + authLoginRequest.getPassword());
        return ResponseEntity.ok().build();
    }
}
