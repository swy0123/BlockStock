package com.olock.blockstotck.board;

import com.olock.blockstotck.board.domain.member.application.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableDiscoveryClient
@RestController
@RequiredArgsConstructor
public class Application {

	private final MemberService memberService;
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@GetMapping("/api/board/tmp")
	public String info(@Value("${server.port}") String port) {
		System.out.println(memberService.getMember(10L).getNickname());
		return "gggggggggggg";
	}

}
