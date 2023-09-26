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

    @Query("MATCH (follower:Member)-[r:FOLLOW]->(following:Member) WHERE follower.id = $memberId RETURN count(*) AS count")
    int findFollowingCnt(@Param("memberId") Long memberId);

    @Query("MATCH (follower:Member)-[r:FOLLOW]->(following:Member) WHERE following.id = $memberId RETURN count(*) AS count")
    int findFollowerCnt(@Param("memberId") Long memberId);

    @Query("MATCH (follower:Member)-[r:FOLLOW]->(following:Member) WHERE following.id = $targetId RETURN follower.id AS id, follower.nickname AS nickname, EXISTS { MATCH (me:Member)-[:FOLLOW]->(myFollowing:Member) WHERE me.id = $myId AND myFollowing.id = follower.id } AS isFollowing")
    List<FollowMemberResponse> findAllFollowers(@Param("myId") Long myId, @Param("targetId") Long targetId);

    @Query("MATCH (follower:Member)-[r:FOLLOW]->(following:Member) WHERE follower.id = $targetId RETURN following.id AS id, following.nickname AS nickname, EXISTS { MATCH (me:Member)-[:FOLLOW]->(myFollowing:Member) WHERE me.id = 0 AND myFollowing.id = following.id } AS isFollowing")
    List<FollowMemberResponse> findAllFollowings(@Param("myId") Long myId, @Param("targetId") Long targetId);

    @Query("MATCH (follower:Member)-[:FOLLOW]->(following:Member) WHERE follower.id = $myId AND following.id = $otherId RETURN COUNT(*) > 0")
    boolean isFollowing(@Param("myId") Long myId, @Param("otherId") Long otherId);

}
