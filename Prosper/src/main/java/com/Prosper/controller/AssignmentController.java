package com.Prosper.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Prosper.entity.AssignmentEntity;
import com.Prosper.request.model.AssignmentRequest;
import com.Prosper.request.model.CourseRequest;
import com.Prosper.response.model.AssignmentResponse;
import com.Prosper.response.model.CourseResponse;
import com.Prosper.service.AssignmentService;
import com.Prosper.service.CourseService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@RestController
@CrossOrigin
@RequestMapping("/assignment")
public class AssignmentController {
	
	@Autowired
	private AssignmentService assignmentService;
	
	@PostMapping("/add")
	public AssignmentResponse courseData(@RequestBody AssignmentRequest courseRequestModel) {
		
		return assignmentService.courseRegisterService(courseRequestModel); 
	}
	
	@GetMapping("/get")
	public List<AssignmentEntity> getassignmentData(@RequestParam String courseTitle) {
		
		return assignmentService.getAssignment(courseTitle);
	}
	
}

