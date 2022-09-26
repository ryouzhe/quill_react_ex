package com.backend.quillEx.controller;

import com.backend.quillEx.domain.Image;
import com.backend.quillEx.domain.Post;
import com.backend.quillEx.dto.PostDto;
import com.backend.quillEx.repository.ImageRepository;
import com.backend.quillEx.repository.PostRepository;
import com.backend.quillEx.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class IndexController {

    @Autowired
    private PostService postService;
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private ImageRepository imageRepository;

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

    // Post update
    @PostMapping("/update/{id}")
    public String PostUpdate(String title, String body, @PathVariable Long id) {
        PostDto postDto = PostDto.builder()
                .title(title)
                .body(body)
                .build();

        postService.updatePost(postDto, id);
        return "updatePost";
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

    // Quill Edito 이미지 추가 시 Local Storage 이미지 저장하기
    @PostMapping("/imageUpload")
    public String SaveImg(MultipartFile[] uploadFile, @PathVariable Long id) {

        Post postEntity = postRepository.findById(id).get();
        Image imageEntity = new Image();

        // 업로드 파일 저장 경로
        String uploadFolder = "C:\\Temp";
        String result;

        SimpleDateFormat sdt = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        String formatDate = sdt.format(date);

        String datePath = formatDate.replace("-", File.separator);

        File uploadPath = new File(uploadFolder, datePath);

        if(uploadPath.exists() == false)    uploadPath.mkdirs();

        for(MultipartFile multipartFile : uploadFile) {
            String uploadFileName = multipartFile.getOriginalFilename();

            String uuid = UUID.randomUUID().toString();
            uploadFileName = uuid + "_" + uploadFileName;

            File saveFile = new File(uploadFolder, uploadFileName);
            result = uploadFolder + "\\" + uploadFileName;

            try {
                multipartFile.transferTo(saveFile);
                System.out.println("-------------------");
                System.out.println("Image save complete");
                System.out.println("-------------------");
                imageEntity.setFileName(uploadFileName);
                imageEntity.setPost(postEntity);
                imageRepository.save(imageEntity);
                return result;
            } catch (Exception e) {
                System.out.println("-------------------");
                e.printStackTrace();
                System.out.println("-------------------");
            }
        }
        System.out.println("Image save failed");
        return null;
    }

    // Local Storage 저장 이미지 Preview 출력
    @ResponseBody
    @GetMapping("/display")
    public ResponseEntity<byte[]> showImageGet(@RequestParam("filePath") String filePath) {
        System.out.println("-----------------------");
        System.out.println("Controller showImageGet");
        System.out.println("fileName: " + filePath);
        System.out.println("-----------------------");

        File file = new File(filePath);

        ResponseEntity<byte[]> result = null;

        try {
            HttpHeaders header = new HttpHeaders();
            header.add("Content-type", Files.probeContentType(file.toPath()));
            result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file), header, HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }
}
