package com.olock.blockstotck.board.domain.tacticboard.persistance;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.JoinType;
import org.springframework.data.jpa.domain.Specification;

public class TacticPostSpecification {
    public static Specification<TacticPost> findByKeyword(String keyword) {
        return ((root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("title"), "%" + keyword + "%"));
    }

    public static Specification<TacticPost> findByMy(Long memberId) {
        return ((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("memberId"), memberId));
    }

    public static Specification<TacticPost> findByLike(Long memberId) {
        return ((root, query, criteriaBuilder) -> {
            root.join("tacticPostLikes", JoinType.LEFT);
            return criteriaBuilder.equal(root.get("tacticPostLikes").get("memberId"), memberId);
        });
    }

    public static Specification<TacticPost> joinTacticPostLike() {
        return (root, query, criteriaBuilder) -> {
            root.join("tacticPostLikes", JoinType.LEFT);
            query.groupBy(root.get("id"));
            Expression<Long> likes = criteriaBuilder.count(root.get("tacticPostLikes")); // like의 갯수를 세기 위한 표현식입니다.
            query.multiselect(root, likes.alias("likes")); // select절에 tactic_post와 like의 갯수를 추가합니다.
            return null;
        };
    }
}
