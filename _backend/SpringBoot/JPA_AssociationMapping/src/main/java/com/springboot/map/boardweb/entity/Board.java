package com.springboot.map.boardweb.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Board {
	@Id
	@GeneratedValue
	private Integer seq;
	private String title;
	private String content;
	private Date createDate = new Date();
	private Integer cnt;
	
	//member 테이블과 join되도록 함.
	@ManyToOne
	@JoinColumn(name = "MEMBER_ID")
	private Member member;
	
}
