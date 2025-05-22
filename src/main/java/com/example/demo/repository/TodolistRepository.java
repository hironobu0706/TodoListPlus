package com.example.demo.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.mapper.TodolistMapper;
import com.example.demo.model.Todolist;

@Repository
@Transactional
public class TodolistRepository {

	@Autowired
	private TodolistMapper mapper;

	public List<Todolist> getTodolist() {
		return mapper.getTodolist();
	}

	public Todolist getTodolistWithId(int id) {
		return mapper.getTodolistWithId(id);
	}

	public int updateTodolist(Todolist todolist) {
		return mapper.updateTodolist(todolist);
	}

	public int deleteTodoWithId(int id) {
		return mapper.deleteTodoWithId(id);
	}
	
	public int createTodo(Todolist todolist) {
		return mapper.createTodo(todolist);
	}

	public int completeTodolistWithId(int id) {
		return mapper.completeTodolistWithId(id);
	}
}
