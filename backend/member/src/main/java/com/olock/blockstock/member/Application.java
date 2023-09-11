package com.olock.blockstock.member;

import com.olock.blockstock.member.domain.member.persistence.MemberRepository;
import com.olock.blockstock.member.domain.member.persistence.entity.Member;
import com.olock.blockstock.member.domain.member.persistence.entity.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@EnableDiscoveryClient
@SpringBootApplication
@RestController
@RequiredArgsConstructor
public class Application {
	private final MemberRepository memberRepository;


	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);

	}

	@GetMapping("/member/info")
	public String info() {
		Member newMember = Member.builder()
				.email("example@example.com")
				.password("password")
				.nickname("Example User")
				.imagePath("path/to/image.jpg")
				.role(Role.MEMBER.name())
				.build();

		memberRepository.save(newMember);
		return "member 서비스의 기본 동작 Port: ";
	}

}
