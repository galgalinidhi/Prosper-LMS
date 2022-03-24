package com.Prosper.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.Prosper.entity.AssignmentEntity;
import com.Prosper.request.model.AssignmentRequest;
import com.Prosper.response.model.AssignmentResponse;
import com.Prosper.service.AssignmentService;

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
	
	@Bean(name = "multipartResolver")
	public CommonsMultipartResolver multipartResolver() {
	    CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
	    multipartResolver.setMaxUploadSize(100000);
	    return multipartResolver;
	}
	
	/*
	 * this function allows students to upload one file at a time.
	 */
	@RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
	public String submit(@RequestParam("file") MultipartFile file, ModelMap modelMap) {
	    modelMap.addAttribute("file", file);
	    return "fileUploadView";
	}
	
	
	/*
	 * this function allows students to upload multiple files at once
	 */
	
	@RequestMapping(value = "/uploadMultiFile", method = RequestMethod.POST)
	public String submit(@RequestParam("files") MultipartFile[] files, ModelMap modelMap) {
	    modelMap.addAttribute("files", files);
	    return "fileUploadView";
	}
	
	
	
	
	
	/*
	 * this function allows us to store files with additional data typically done by teachers
	 */
	@PostMapping("/uploadFileWithAddtionalData")
	public String submit(
	  @RequestParam MultipartFile file, @RequestParam String name,
	  @RequestParam String email,@RequestParam String title,@RequestParam int points, ModelMap modelMap) {

	    modelMap.addAttribute("username", name);
	    modelMap.addAttribute("teacher_email", email);
	    modelMap.addAttribute("assignment_title", title);
	    modelMap.addAttribute("assignment_points",points);
	    modelMap.addAttribute("assignment_entity", file);
	    return "fileUploadView";
	}
	
}

	