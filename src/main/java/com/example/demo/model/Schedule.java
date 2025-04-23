package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Schedule {
    private String target_date;
    private String target_time;
    private String plan;
    private String created_at;
    private String updated_at;
}
