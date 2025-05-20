package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Schedule;
import com.example.demo.repository.ScheduleRepository;

@RestController
@RequestMapping("api")
@CrossOrigin("http://localhost:3000")
public class ScheduleController {

	@Autowired
	private ScheduleRepository service;

	@GetMapping("/schedule/listView")
	public Schedule getScheduleWithDate(@RequestParam("taget_date") String taget_date) {
		System.out.println("kiteruaaaaaaaaa");
		return service.getScheduleWithDate(taget_date);
	}

	@GetMapping("/schedule/listView2")
	public String getScheduleWithDate2() {
		System.out.println("kiteruaaaaaaaaa");
		return "";
	}
}
