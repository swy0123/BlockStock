package com.olock.blockstotck.board.domain.member.persistance;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface MemberRepository extends CrudRepository<Member, String> {
    boolean existsById(String id);
    Optional<Member> findById(String id);
}

