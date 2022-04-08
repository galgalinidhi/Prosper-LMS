package com.Prosper.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Prosper.entity.StudentMappedCourse;

public interface StudentMappedCourseRepository extends JpaRepository<StudentMappedCourse, Integer> {

}
