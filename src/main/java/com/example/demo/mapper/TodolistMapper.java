package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.model.Todolist;

@Mapper
public interface TodolistMapper {
	List<Todolist> getTodolist();
	
	Todolist getTodolistWithId(int id);
	
	int updateTodolist(Todolist todolist);
	
	int deleteTodoWithId(int id);
	
	int createTodo(Todolist todolist);
	
	int completeTodolistWithId(int id);

}
