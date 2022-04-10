package com.Prosper.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Prosper.entity.StudentMappedCourseEntity;

public interface StudentMappedCourseRepository extends JpaRepository<StudentMappedCourseEntity, Integer> {

}
