package com.olock.blockstock.member.domain.member.persistence;

import com.olock.blockstock.member.domain.member.dto.response.FollowMemberResponse;
import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FollowRepository extends Neo4jRepository<Member, Long> {
    @Query("MATCH (follower:Member), (following:Member) WHERE follower.id = $memberId AND following.id = $targetId AND NOT (follower)-[:FOLLOW]->(following) CREATE (follower)-[:FOLLOW]->(following)")
    void follow(@Param("memberId") Long memberId, @Param("targetId") Long targetId);

    @Query("MATCH (follower:Member)-[r:FOLLOW]->(following:Member) WHERE follower.id = $memberId AND following.id = $targetId DELETE r")
    void unfollow(@Param("memberId") Long memberId, @Param("targetId") Long targetId);

    @Query("MATCH (follower:Member)-[r:FOLLOW]->(following:Member WHERE following.id = $targetId WITH follower MATCH (me:Member)-[f:FOLLOW]->(myFollowing:Member) WHERE me.id = $myId RETURN follower.id AS id, follower.nickname as nickname, CASE WHEN follower.id IN COLLECT(myFollowing.id) THEN 'true' ELSE 'false' END AS isFollowing")
    List<FollowMemberResponse> findAllFollowers(@Param("myId") Long myId, @Param("targetId") Long targetId);

    @Query("MATCH (follower:Member)-[r:FOLLOW]->(following:Member WHERE follower.id = $targetId WITH follower MATCH (me:Member)-[f:FOLLOW]->(myFollowing:Member) WHERE me.id = $myId RETURN follower.id AS id, follower.nickname as nickname, CASE WHEN follower.id IN COLLECT(myFollowing.id) THEN 'true' ELSE 'false' END AS isFollowing")
    List<FollowMemberResponse> findAllFollowings(@Param("myId") Long myId, @Param("targetId") Long targetId);
}
