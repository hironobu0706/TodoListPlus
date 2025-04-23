package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.model.Schedule;

@Mapper
public interface ScheduleMapper {
	Schedule getScheduleWithDate(String target_date);

}
