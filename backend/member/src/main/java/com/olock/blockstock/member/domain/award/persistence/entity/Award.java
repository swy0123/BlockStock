package com.olock.blockstock.member.domain.award.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

@Node("Award")
@Getter
@NoArgsConstructor
public class Award {
    @Id
    @GeneratedValue
    private Long index;
    private Long contestId;
    private String name;
}
