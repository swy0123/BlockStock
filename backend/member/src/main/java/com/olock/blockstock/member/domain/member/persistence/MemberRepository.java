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

    @Query("MATCH (n:Member) WHERE n.id = $id RETURN COUNT(n) > 0")
    boolean existsByMemberId(@Param("id") Long id);

    @Query("MATCH (idx:Idx) RETURN idx.lastIdx")
    Long findLastIdx();

    @Query("MATCH (idx:Idx) SET idx.lastIdx = idx.lastIdx + 1")
    Long updateLastIdx();


    boolean existsByEmail(String email);

    @Query("MATCH (n:Member) WHERE n.id = $id SET n.nickname = $nickname")
    void updateNickname(@Param("id") Long id, @Param("nickname") String nickname);

    @Query("MATCH (n:Member) WHERE n.id = $id SET n.password = $password")
    void updatePassword(@Param("id") Long id, @Param("password") String password);

    @Query("MATCH (n:Member) WHERE n.id = $memberId SET n.money = n.money + $money")
    void updateMoney(@Param("memberId") Long memberId, @Param("money") Long money);

    @Query("MATCH (n:Member) WHERE n.id = $memberId SET n.ticketCount = n.ticketCount + $ticketCount")
    void updateTicket(@Param("memberId") Long memberId, @Param("ticketCount") int ticketCount);

    @Query("MATCH (n:Member) WHERE n.id = $memberId OPTIONAL MATCH (n)-[r]-() DELETE n, r")
    void deleteByMemberId(@Param("memberId") Long memberId);
}
