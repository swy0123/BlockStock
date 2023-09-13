package com.olock.blockstock.member.domain.member.persistence;

import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends Neo4jRepository<Member, Long> {
    Member findByEmail(String email);
    Member save(Member member);
}
