package com.olock.blockstock.gateway.persistence;

import com.olock.blockstock.gateway.persistence.entity.RefreshToken;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RefreshTokenRepository extends CrudRepository<RefreshToken, String> {
    void deleteByEmail(String email);
    boolean existsByRefreshToken(String refreshToken);

    Optional<RefreshToken> findById(String refreshToken);
}
