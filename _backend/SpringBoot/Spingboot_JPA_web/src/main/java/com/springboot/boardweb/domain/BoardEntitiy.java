package com.springboot.boardweb.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "BOARD")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoardEntitiy {
	private Long seq;
	private Long cnt = 0L;
	private String content;
	private String title;
	private Date writeDate = new Date();
	private String wirter;
}
