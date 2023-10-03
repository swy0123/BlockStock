package com.olock.blockstock.member.domain.award.persistence;

import com.olock.blockstock.member.domain.award.persistence.entity.Award;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Objects;

public interface AwardRepository extends Neo4jRepository<Award, Long> {

    @Query("MATCH (m:Member) WHERE m.id = $memberId CREATE (m)-[:have]->(a:Award {contestId: $contestId, name: $name}) RETURN null")
    void addAward(@Param("memberId") Long memberId, @Param("contestId") Long contestId, @Param("name") String name);

    @Query("MATCH (m:Member)-[:have]->(a:Award) WHERE m.id = $memberId RETURN a")
    List<Award> findAwardTitlesByMemberId(@Param("memberId") Long memberId);
}
