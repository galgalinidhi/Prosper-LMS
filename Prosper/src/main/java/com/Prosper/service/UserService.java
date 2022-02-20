package com.Prosper.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
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

import java.io.UnsupportedEncodingException;
import java.util.UUID;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	 @Autowired
	 private JavaMailSender mailSender;
	
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
			logger.info("userRegisterService : new userId: "+userId + " username: " + userRequestModel.userName);
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
				logger.info("Service : POST User Correct Authentication: user_id = "+userResponse.userId +" userName: " + userRegisterRequest.userName + " Password Auth: "+authentication);
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

	public UserResponse postForgotPasswordService(UserRequest userRegisterRequest) {
		String userId = userRepository.findUserByEmailId(userRegisterRequest.emailId);
		logger.info("Forgot password service : userId "+userId);
		
		if(userId == null) {
			userResponse = new UserResponse();
			userResponse.userId = -1;
			userResponse.response = "Entered email does not exists! Please register";
			logger.info("Forgot password service:  email does not exists : userId "+userId);
			return userResponse;
		}
		else {
			userResponse = new UserResponse();
//			userEntity =  new UserEntity();
//			String token = UUID.randomUUID().toString();
			UserEntity userEntity = userRepository.findByUserId((long)Integer.parseInt(userId));
			userEntity.resetPasswordToken = "token";
			userRepository.save(userEntity);
			try {
				String resetPasswordLink = "http://localhost:3000/changepassword" + "?token=" + "token";
				 sendEmail(userRegisterRequest.emailId, resetPasswordLink);
				 logger.info("Email sent");
			} catch (UnsupportedEncodingException | MessagingException e) {
		        logger.error("Error while sending email");
		    }
			userResponse.userId = Integer.parseInt(userId);
			userResponse.token = "token";
			userResponse.response = "Email sent successfully!";
			logger.info("Forgot password service:  email sent successfully! : userId "+userId +" email: "+userRegisterRequest.emailId);
			return userResponse;
		}
	}
	
	public void sendEmail(String recipientEmail, String link)
	        throws MessagingException, UnsupportedEncodingException {
	    MimeMessage message = mailSender.createMimeMessage();              
	    MimeMessageHelper helper = new MimeMessageHelper(message);
	     
	    helper.setFrom("csci.p565.prosper@gmail.com", "Prosper");
	    helper.setTo(recipientEmail);
	     
	    String subject = "Here's the link to reset your password!!";
	     
	    String content = "<p>Hello,</p>"
	            + "<p>You have requested to reset your password.</p>"
	            + "<p>Click the link below to change your password:</p>"
	            + "<p><a href=\"" + link + "\">Change my password</a></p>"
	            + "<br>"
	            + "<p>Ignore this email if you do remember your password, "
	            + "or you have not made the request.</p>";
	     
	    helper.setSubject(subject);
	     
	    helper.setText(content, true);
	     
	    mailSender.send(message);
	}

	public UserResponse postResetPasswordService(String token, UserRequest userRegisterRequest) {
		logger.info("Reset password service Token:  "+token);
		UserEntity userEntity = userRepository.findByResetPasswordToken(userRegisterRequest.token);
		
		if(userEntity == null) {
			userResponse = new UserResponse();
			userResponse.response = "Invalid or Used Token!!";
			logger.info("Reset password service unsuccessful!: invalid or used token");
			return userResponse;
		}else {
			userResponse = new UserResponse();
			String hashPassword = hashPassword(userRegisterRequest.password);
			userEntity.resetPasswordToken = null;
			userEntity.password = hashPassword;
			userRepository.save(userEntity);
			String userIdDB = userRepository.findUserByEmailId(userEntity.emailId);
			userResponse.userId = Integer.parseInt(userIdDB);
			userResponse.response = "Password Changed Successfully";
			logger.info("Reset password service successful: username "+userEntity.userName);
			return userResponse;
		}
	}

}
