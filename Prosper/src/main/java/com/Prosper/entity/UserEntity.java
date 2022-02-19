package com.Prosper.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Entity
public class UserEntity {
	
	 @Id
	 @GeneratedValue
	 public Long userId;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String userName;

	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String emailId;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String name;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String password;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String contactNo;

	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String roleId;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String resetPasswordToken;
}
