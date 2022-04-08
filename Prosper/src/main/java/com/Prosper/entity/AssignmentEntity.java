package com.Prosper.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentEntity {
	

	public AssignmentEntity(byte[] uploadAssignmentQuestion) {
		this.uploadAssignmentQuestion = uploadAssignmentQuestion;
	}

	public AssignmentEntity() {}

	@Id
	 @GeneratedValue
	 public Long assignmentId;
	
	@Getter @Setter(AccessLevel.PACKAGE)
	 public String assignmentTitle;
	
	@Getter @Setter(AccessLevel.PACKAGE)
	 public String assignmentDescription;
	
	@Getter @Setter(AccessLevel.PACKAGE)
	public String courseTitle;
	
	@Getter @Setter(AccessLevel.PACKAGE)
	@Lob
	public byte[] uploadAssignmentQuestion;

//	public Object getData() {
//		// TODO Auto-generated method stub
//		return null;
//	}
}
