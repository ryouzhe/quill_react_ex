package com.backend.quillEx.controller;

import com.backend.quillEx.domain.Post;
import com.backend.quillEx.dto.PostDto;
import com.backend.quillEx.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class IndexController {

    @Autowired
    private PostService postService;

    @GetMapping("/test")
    public String Test() {
        return "Api Test";
    }

    // Posts List Select
    @GetMapping("/list")
    public List<PostDto> PostList() {
        List<PostDto> postList = postService.findPostList();
        return postList;
    }

    // Post save
    @PostMapping("/write")
    public String PostWrite(String title, String body) {
        PostDto postDto = PostDto.builder()
                .title(title)
                .body(body)
                .build();

        postService.savePost(postDto);
        return "writePost";
    }

    // Post view
    @GetMapping ("/view/{id}")
    public PostDto PostView(@PathVariable Long id) {
        System.out.println("=====================");
        System.out.println("Post Read Start:" + id);
        System.out.println("=====================");
        Post post = postService.findPost(id);
        PostDto postDto = PostDto.builder()
                .id(post.getId())
                .title(post.getTitle())
                .body(post.getBody())
                .createdDate(post.getCreatedDate())
                .lastModifiedDate(post.getLastModifiedDate())
                .build();
        return postDto;
    }

    // Post delete
    @GetMapping("/delete/{id}")
    public void PostDelete(@PathVariable Long id) {
        postService.deletePost(id);
    }
}
