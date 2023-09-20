package com.olock.blockstock.member.domain.member.persistence;

import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface FollowRepository extends Neo4jRepository<Member, Long> {

}
