package com.person.proj.spring;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PersonDTO {
	   private int idx;
	   private String id;
	   private String name;
	   private int age;
}
