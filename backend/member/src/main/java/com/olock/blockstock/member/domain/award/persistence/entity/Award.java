package com.olock.blockstock.member.domain.award.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

@Node("Award")
@Getter
@NoArgsConstructor
@ToString
public class Award {
    @Id
    @GeneratedValue
    private Long index;
    private Long contestId;
    private String name;
}
