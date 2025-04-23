package com.example.demo.request;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodolistRequest {
	
    private int id;
    
    @Length(max = 100, message = "内容は100文字以内で入力してください。")
    private String contents;
    private String tag;
    
    @Range(min = 1, max = 200, message = "ステータスは1～200までの半角数字を入力してください。")
    private int status;
    private String deadline;

}
