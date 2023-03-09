package org.comstudy.todo.controller;

import java.util.List;

import org.comstudy.todo.domain.TodoEntity;
import org.comstudy.todo.dto.TodoDTO;
import org.comstudy.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todo")
public class TodoController {
   @Autowired
   TodoService todoService;
   
   @PostMapping
   public ResponseEntity<?> createTodo(@RequestBody TodoDTO dto) {
	   
      return null;
   }

   @GetMapping("/list")
   public String selectList() {
      String userId = "";
      List<TodoEntity> todoList = todoService.findAll();
      System.out.print(">>>>>>>> todo list: ");
      for(TodoEntity todo :todoList) {
         System.out.println(todo);
      }
      return "todo list";
   }
}