package com.backend.quillEx.repository;

import com.backend.quillEx.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
