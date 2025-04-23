package com.example.demo.model;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Todolist {
    private int id;
    
    @Length(max = 100, message = "内容は100文字以内で入力してください。")
    private String contents;
    private String tag;
    
    @Range(min = 1, max = 200, message = "ステータスは1～200までの半角数字を入力してください。")
    private int status;
    private String deadline;
}
