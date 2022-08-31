package com.backend.quillEx.service;

import com.backend.quillEx.domain.Post;
import com.backend.quillEx.dto.PostDto;
import com.backend.quillEx.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<PostDto> findPostList() {
        List<Post> findPosts = postRepository.findAll();
        List<PostDto> postList = new ArrayList<>();

        for(Post post : findPosts) {
            postList.add(PostDto.builder()
                    .id(post.getId())
                    .title(post.getTitle())
                    .body(post.getBody())
                    .build());
        }
        return postList;
    }

    @Transactional
    public Post savePost(PostDto postDto) {
        Post post = Post.builder()
                .title(postDto.getTitle())
                .body(postDto.getBody())
                .build();
        postRepository.save(post);
        return post;
    }
}
