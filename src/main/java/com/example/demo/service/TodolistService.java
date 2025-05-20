package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Todolist;
import com.example.demo.repository.TodolistRepository;

@Service
public class TodolistService {

    @Autowired
    private TodolistRepository todolistRepository;

	public List<Todolist> getTodolist() {
		return todolistRepository.getTodolist();
	}

	public Todolist getTodolistWithId(int id) {
		return todolistRepository.getTodolistWithId(id);
	}
	
	public int updateTodolist(Todolist todolist) {

		return todolistRepository.updateTodolist(todolist);
	}

	public int deleteTodoWithId(int id) {
		return todolistRepository.deleteTodoWithId(id);
	}

    public int createTodo(Todolist todolist) {
        return todolistRepository.createTodo(todolist);
    }

	public int completeTodolistWithId(int id) {
		return todolistRepository.completeTodolistWithId(id);
	}
}
