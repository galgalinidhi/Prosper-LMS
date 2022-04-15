package com.Prosper.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Prosper.entity.StudentMappedCourseEntity;
import com.Prosper.repository.StudentMappedCourseRepository;
import com.Prosper.request.model.UserRequest;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@Service
public class StudentMappedCourseService {
	
	@Autowired
	private StudentMappedCourseRepository mappedCourseRepository;
	
	private StudentMappedCourseEntity mappedCourseEntity;
	

	public String mapStudentCourseService(UserRequest userRequest) {
		mappedCourseEntity = new StudentMappedCourseEntity();
		List<StudentMappedCourseEntity> entity = mappedCourseRepository.findByUserName(userRequest.userName);
		for(StudentMappedCourseEntity entity1 : entity) {
			if(entity1.courseName.matches(userRequest.courseName)) {
				return "already mapped";
			}
		}
		mappedCourseEntity.userName = userRequest.userName;
		mappedCourseEntity.courseName = userRequest.courseName;
		mappedCourseRepository.save(mappedCourseEntity);
		return "OK";
	}

}
