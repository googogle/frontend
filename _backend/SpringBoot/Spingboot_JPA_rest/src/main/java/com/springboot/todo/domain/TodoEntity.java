package com.springboot.todo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "TODO")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class TodoEntity {
   @GeneratedValue
   @Id
   private String id; // 오브젝트 아이디
   private String userId;
   private String title;
   private boolean done;
}
