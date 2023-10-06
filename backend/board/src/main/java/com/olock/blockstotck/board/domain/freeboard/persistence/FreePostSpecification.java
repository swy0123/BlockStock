package com.olock.blockstotck.board.domain.freeboard.persistence;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePost;
import jakarta.persistence.criteria.JoinType;
import org.springframework.data.jpa.domain.Specification;

public class FreePostSpecification {
    public static Specification<FreePost> findByKeyword(String keyword){
        return ((root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("title"), "%" + keyword + "%"));
    }

    public static Specification<FreePost> findByMy(Long memberId){
        return ((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("memberId"), memberId));
    }

    public static Specification<FreePost> findByLike(Long memberId){
        return ((root, query, criteriaBuilder) -> {
            root.join("freePostLikes", JoinType.LEFT);
            return criteriaBuilder.equal(root.get("freePostLikes").get("memberId"), memberId);
        });
    }
}
