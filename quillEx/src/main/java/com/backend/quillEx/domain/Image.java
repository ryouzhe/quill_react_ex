package com.backend.quillEx.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Image extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fileName;
    private boolean hasTag = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "POST_ID")
    private Post post;

    // 양방향 연관관계 편의 메소드
    public void setPost(Post post) {
        this.post = post;
        if(!post.getImages().contains(this)) {
            post.getImages().add(this);
        }
    }
}
