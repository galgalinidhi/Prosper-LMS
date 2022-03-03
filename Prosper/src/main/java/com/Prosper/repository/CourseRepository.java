package com.Prosper.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Prosper.entity.CourseEntity;
import com.Prosper.entity.UserEntity;

@Repository
public interface CourseRepository extends JpaRepository<CourseEntity, Integer>{
	
	public CourseEntity findByCourseName(String courseName);
	public CourseEntity findByCourseDescription(String courseDescription);
	
}
