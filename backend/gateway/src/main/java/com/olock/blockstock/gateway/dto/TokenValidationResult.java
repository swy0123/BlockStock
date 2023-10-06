package com.olock.blockstock.gateway.dto;

import io.jsonwebtoken.Claims;

public record TokenValidationResult(Claims claims, String token) {
}
