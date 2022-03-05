package com.Prosper.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Entity
public class AssignmentEntity {
	@Id
	 @GeneratedValue
	 public Long assignmentId;
	
	@Getter @Setter(AccessLevel.PACKAGE)
	 public String assignmentTitle;
	
	@Getter @Setter(AccessLevel.PACKAGE)
	 public String assignmentDescription;
	
	@Getter @Setter(AccessLevel.PACKAGE)
	public String courseTitle;
}
