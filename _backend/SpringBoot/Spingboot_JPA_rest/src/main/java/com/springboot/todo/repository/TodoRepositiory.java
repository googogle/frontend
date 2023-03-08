package com.springboot.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.todo.domain.TodoEntity;

public interface TodoRepositiory extends JpaRepository<TodoEntity, String> {
	
}
