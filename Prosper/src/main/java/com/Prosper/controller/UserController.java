package com.Prosper.controller;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Prosper.request.model.UserRequest;
import com.Prosper.response.model.UserResponse;
import com.Prosper.service.UserService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@RestController
@RequestMapping("/user")
public class UserController {
	
	private static final Logger logger = LogManager.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public UserResponse userData(@RequestBody UserRequest userRequestModel) {
		logger.info("controller : user/register [POST]");
		return userService.userRegisterService(userRequestModel); 
	}
	
	@PostMapping("/authentication")
	public UserResponse postUserAuthentication(@RequestBody UserRequest userRegisterRequest) {
		logger.info("controller : user/authentication [POST]");
		return userService.postUserAuthenticationService(userRegisterRequest);
	}

}
