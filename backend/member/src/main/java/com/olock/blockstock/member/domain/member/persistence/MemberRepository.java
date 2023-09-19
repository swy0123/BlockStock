package com.olock.blockstock.member.domain.member.persistence;

import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberRepository extends Neo4jRepository<Member, Long> {
    Optional<Member> findByEmail(String email);

    @Query("MATCH (n:Member) WHERE n.id = $id RETURN n")
    Optional<Member> findByMemberId(@Param("id") Long id);

    @Query("MATCH (n:Member) WHERE n.id = 0 RETURN COUNT(n) > 0")
    public boolean existsByMemberId(@Param("id") Long id);

    @Query("MATCH (idx:Idx) RETURN idx.lastIdx")
    Long findLastIdx();

    @Query("MATCH (idx:Idx) SET idx.lastIdx = idx.lastIdx + 1")
    Long updateLastIdx();


    boolean existsByEmail(String email);
}
