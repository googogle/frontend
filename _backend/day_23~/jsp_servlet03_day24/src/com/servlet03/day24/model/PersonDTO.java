package com.servlet03.day24.model;


public class PersonDTO {
	
	private int seq;
	private String id;
	private String name;
	private int age;
	
	public PersonDTO() {
		//매개변수가 없는 기본 생성자
		//생성자 오버로딩 된 경우 개발자가 직접 코딩
	}
	
	public PersonDTO(int seq, String id, String name, int age) {
		//매개변수가 있는 생성자 오버로딩
		//오버로딩의 시그너처는 매개변수의 타입, 이름
		seq = this.seq;
		id = this.id;
		name = this.name;
		age = this.age;
	}
}
	

