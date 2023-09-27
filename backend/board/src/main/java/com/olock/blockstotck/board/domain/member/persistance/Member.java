package com.olock.blockstotck.board.domain.member.persistance;

import com.olock.blockstotck.board.domain.member.dto.MemberTopicMessage;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@RedisHash(value = "member")
@Getter
@NoArgsConstructor
@ToString
public class Member {
    @Id
    private Long id;
    private String nickname;

    public Member(Long id, String nickname) {
        this.id = id;
        this.nickname = nickname;
    }

    public Member(MemberTopicMessage memberTopicMessage) {
        this.id = memberTopicMessage.getId();
        this.nickname = memberTopicMessage.getNickname();
    }
}
