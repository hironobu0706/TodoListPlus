package com.example.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.mapper.ScheduleMapper;
import com.example.demo.model.Schedule;

@Service
@Transactional
public class ScheduleRepository {


	@Autowired
	private ScheduleMapper mapper;

	public 	Schedule getScheduleWithDate(String target_date) {
		return mapper.getScheduleWithDate(target_date);
	}
}
