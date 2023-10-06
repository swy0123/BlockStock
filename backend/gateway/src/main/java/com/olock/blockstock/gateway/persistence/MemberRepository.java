package com.olock.blockstock.gateway.persistence;

import com.olock.blockstock.gateway.persistence.entity.Member;
import org.springframework.data.neo4j.repository.ReactiveNeo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

public interface MemberRepository extends ReactiveNeo4jRepository<Member, Long> {

    Mono<Member> findByEmail(String email);
    @Query("MATCH (n:Member) WHERE n.id = $id RETURN n")
    Mono<Member> findByMemberId(Long id);
}

