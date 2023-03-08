package com.springboot.todo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController // template(html페이지)없이 브라우저에 문자열 출력가능
public class TestController {

	@GetMapping("/")
	public String hello() {
		// 리턴문자열이 브라우저에 바로 출력됨.
		return "TestController >> hello()";
	}

	@PostMapping("/hello")
	public String helloProc(@RequestParam("user") String user, @RequestParam("message") String message) {
		return String.format("{\"user\":\"%s\",\"message\":\"%s\"}", user, message);
	}
	

}
