package com.proj.spring;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

import com.person.proj.spring.PersonDTO;

public class Main {
	//runAs > Run On Server 실행 : 웹 서버 어플리케이션 실행
	//runAs > javaApplication 실행 : main에서 실행되는 Application(local Application. 웹 x)
	public static void main(String[] args) {
		System.out.println("asdasd");
		
		
		//직접 bean 객체를 생성해서 사용.
		PersonDTO dto = new PersonDTO(99,"Lee","LEE",27);
		System.out.println(dto);
		System.out.println("asdasdsad");
		
		//applicationContext에 선언한 bean객체 Lookup
		/*String resource = "applicationContext.xml";
		AbstractApplicationContext factory = new GenericXmlApplicationContext(resource);
		PersonDTO dto = (PersonDTO)factory.getBean("PersonDTO");
		System.out.println(dto);*/
	}
}
