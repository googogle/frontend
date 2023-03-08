package com.springboot.todo.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class TodoDTO {
	@Id
	@GeneratedValue
	private String id; //object id
	private String userId;
	private String title;
	private boolean done;
}
