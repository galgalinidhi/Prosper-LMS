package com.Prosper.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Prosper.entity.UserEntity;
import com.Prosper.repository.UserRepository;
import com.Prosper.request.model.UserRequest;
import com.Prosper.response.model.UserResponse;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.mindrot.jbcrypt.BCrypt;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	private UserEntity userEntity = new UserEntity();
	
	private UserResponse userResponse = new UserResponse();
	
	private static final Logger logger = LogManager.getLogger(UserService.class);

	public UserResponse userRegisterService(UserRequest userRequestModel) {
		String userIdUserName = userRepository.findUserByUserName(userRequestModel.userName);
		String userIdEmailId = userRepository.findUserByEmailId(userRequestModel.emailId);
		if(userIdUserName != null) {
			userResponse = new UserResponse();
			userResponse.userId = Integer.parseInt(userIdUserName);
			userResponse.response = "Username already exists!";
			logger.info("userRegisterService : userId: "+userIdUserName + " exists username: " + userRequestModel.userName);
			return userResponse;
		}
		else if(userIdEmailId != null) {
			userResponse = new UserResponse();
			userResponse.userId = Integer.parseInt(userIdEmailId);
			userResponse.response = "User email already exists!";
			logger.info("userRegisterService : userId: "+userIdUserName + " exists email: " + userRequestModel.emailId);
			return userResponse;
		}
		else {
			userResponse = new UserResponse();
			userEntity =  new UserEntity();
			
			String hashPassword = hashPassword(userRequestModel.password);
			
			userEntity.userName = userRequestModel.userName;
			userEntity.contactNo = userRequestModel.contactNo;
			userEntity.emailId = userRequestModel.emailId;
			userEntity.name = userRequestModel.name;
			userEntity.password = hashPassword;
			userRepository.save(userEntity);
			String userId = userRepository.findUserByUserName(userRequestModel.userName);
			userResponse.userId = Integer.parseInt(userId);
			userResponse.response = "User registred successfully!";
			logger.info("userRegisterService : new userId: "+userId + " exists username: " + userRequestModel.userName);
			return userResponse;
		}
		
	}
	
	public UserResponse postUserAuthenticationService(UserRequest userRegisterRequest) {
		String userExistId = userRepository.findUserByUserName(userRegisterRequest.userName);
		if(userExistId == null) {
			userResponse = new UserResponse();
			userResponse.userId = -1;
			userResponse.response = "Username does not exists, please register.";
			logger.info("Service : POST User Authentication: Not exists : user_id = "+userExistId +" userName: " + userRegisterRequest.userName);
			return userResponse;
		}
		else {
			String hashPassword = userRepository.findPasswordByUserName(userRegisterRequest.userName);
			boolean authentication = checkPassword(userRegisterRequest.password, hashPassword);
			
			if(authentication) {
				userResponse = new UserResponse();
				String userId = userRepository.findUserByUserName(userRegisterRequest.userName);
				userResponse.userId = Integer.parseInt(userId);
				userResponse.response = "Correct password!";
				logger.info("Service : POST User Correct Authentication: user_id = "+userResponse.userId +" userName: " + userRegisterRequest.userName + "Password Auth: "+authentication);
				return userResponse;
			}
			userResponse = new UserResponse();
			userResponse.userId = -1;
			userResponse.response = "Incorrect password!";
			logger.info("Service : POST User incorrect Authentication: user_id = "+userResponse.userId +" UserName: " + userRegisterRequest.userName + " Password Auth: "+authentication);
			return userResponse;
		}
	}
	
	private String hashPassword(String plainTextPassword){
		return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
	}
	
	private boolean checkPassword(String plainPassword, String hashedPassword) {
		if (BCrypt.checkpw(plainPassword, hashedPassword))
			return true;
		else
			return false;
	}

}
