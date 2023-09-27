package com.olock.blockstotck.board.domain.member.persistance;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@RedisHash(value = "member")
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    @Id
    Long id;
    String nickname;
}
