package com.olock.blockstotck.board.domain.tacticboard.persistance;

import com.olock.blockstotck.board.domain.tacticboard.persistance.entity.TacticPost;
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
}
