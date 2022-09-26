package com.backend.quillEx.repository;

import com.backend.quillEx.domain.Image;
import com.backend.quillEx.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {

    // Post로 Image 리스트 찾기
    List<Image> findByPost(Post post);
}
