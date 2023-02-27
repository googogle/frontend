package com.proj.spring;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/person")
public class PersonController {

	@RequestMapping("/list")
	public String list() {
		System.out.println("PersonController list called");
		return "/person/list";
	}

	@RequestMapping("/input")
	public String input() {
		System.out.println("PersonController input called");
		return "/person/input";
	}
}