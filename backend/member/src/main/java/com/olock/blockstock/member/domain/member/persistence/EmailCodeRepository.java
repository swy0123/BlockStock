package com.olock.blockstock.member.domain.member.persistence;

import com.olock.blockstock.member.domain.member.persistence.entity.EmailCode;
import jakarta.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface EmailCodeRepository extends CrudRepository<EmailCode, String> {
    Optional<EmailCode> findByEmail(String email);

    @Transactional
    void deleteById(String email);
}
