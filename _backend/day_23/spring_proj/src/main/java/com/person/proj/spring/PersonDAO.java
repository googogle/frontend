package com.person.proj.spring;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

//클래스 선언 및 bean 등록
@Repository
public class PersonDAO {
	public ArrayList<PersonDTO> selectAll() {
		System.out.println("selectAll called");
		return null;
	}
}
