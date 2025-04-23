package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Todolist;
import com.example.demo.service.TodolistService;

@RestController
@RequestMapping("api")
@CrossOrigin("http://localhost:3000")
public class TodolistController {

	@Autowired
	private TodolistService service;

	@GetMapping("/getAllTodolist")
	public List<Todolist> getTodolist() {
		return service.getTodolist();
	}

	@GetMapping("/todolist/{id}")
	public Todolist getTodolistWithId(@PathVariable("id") String id) {
		return service.getTodolistWithId(Integer.parseInt(id));
	}
	
	@PutMapping("/todolist/update")
	public int updateTodolist(@RequestBody Todolist todolist) {

		return service.updateTodolist(todolist);
	}

	@GetMapping("/todolist/delete/{id}")
	public int deleteTodoWithId(@PathVariable("id") String id) {
		return service.deleteTodoWithId(Integer.parseInt(id));
	}

    @PostMapping("/create")
    public int createTodo(@RequestBody Todolist todolist) {
        return service.createTodo(todolist);
    }

	@GetMapping("/todolist/complete/{id}")
	public int completeTodolistWithId(@PathVariable("id") String id) {
		return service.completeTodolistWithId(Integer.parseInt(id));
	}
}
