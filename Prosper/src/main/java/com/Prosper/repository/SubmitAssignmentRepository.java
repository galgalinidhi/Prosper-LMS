package com.Prosper.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Prosper.entity.SubmitAssignmentEntity;

@Repository
public interface SubmitAssignmentRepository extends JpaRepository<SubmitAssignmentEntity, Long> {
	
	public SubmitAssignmentEntity findBySubmitAssignmentEntityId(Long submitAssignmentEntityId);

}
