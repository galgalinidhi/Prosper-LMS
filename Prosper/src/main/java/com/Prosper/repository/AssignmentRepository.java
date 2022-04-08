package com.Prosper.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Prosper.entity.AssignmentEntity;

@Repository
public interface AssignmentRepository extends JpaRepository<AssignmentEntity, String>{
	
	public AssignmentEntity findByAssignmentTitle(String assignmentTitle);
	public AssignmentEntity findByAssignmentDescription(String assignmentDescription);
	public List<AssignmentEntity> findByCourseTitle(String courseTitle);

	
}
