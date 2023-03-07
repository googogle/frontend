package com.jpa.springboot.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "SARAM")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaramEntitiy {
	@Id
	@GeneratedValue
	private Long seq;
	private String id;
	private String name;
	private int age;
}
