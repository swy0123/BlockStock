package com.olock.blockstock.member.domain.award.persistence;

import com.olock.blockstock.member.domain.award.persistence.entity.Award;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface AwardRepository extends Neo4jRepository<Award, Long> {

}
