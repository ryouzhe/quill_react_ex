package com.backend.quillEx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class QuillExApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuillExApplication.class, args);
	}

}
