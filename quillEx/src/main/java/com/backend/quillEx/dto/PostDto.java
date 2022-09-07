package com.backend.quillEx.dto;

import com.backend.quillEx.domain.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
    private Long id = 0L;
    private String title = "";
    private String body = "";
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;
}
