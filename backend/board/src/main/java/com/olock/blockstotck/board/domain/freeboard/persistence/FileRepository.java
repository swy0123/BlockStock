package com.olock.blockstotck.board.domain.freeboard.persistence;

import com.olock.blockstotck.board.domain.freeboard.persistence.entity.File;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<File, Integer> {
}
