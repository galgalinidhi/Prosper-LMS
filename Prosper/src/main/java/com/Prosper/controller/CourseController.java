package com.Prosper.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Prosper.request.model.CourseRequest;
import com.Prosper.response.model.CourseResponse;
import com.Prosper.service.CourseService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@RestController
@CrossOrigin
@RequestMapping("/course")
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@PostMapping("/add")
	public CourseResponse courseData(@RequestBody CourseRequest courseRequestModel) {
		
		return courseService.courseRegisterService(courseRequestModel); 
	}
	
}
