package com.backend.quillEx.controller;

import com.backend.quillEx.dto.PostDto;
import com.backend.quillEx.repository.PostRepository;
import com.backend.quillEx.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class IndexController {

    @Autowired
    private PostService postService;

    // Posts List Select
    @GetMapping("/list")
    public List<PostDto> Test() {
        List<PostDto> postList = postService.findPostList();
        System.out.println("==================");
        System.out.println("select post list!!");
        System.out.println("==================");
        return postList;
    }

    // Post save
    @PostMapping("/posts")
    public String write(String title, String body) {
        PostDto postDto = PostDto.builder()
                .title(title)
                .body(body)
                .build();

        postService.savePost(postDto);
        return "writePost";
    }

    // Post update
    @PostMapping("/posts/{id}")
    public String update(@PathVariable Long id) { return "updatePost"; }
}
