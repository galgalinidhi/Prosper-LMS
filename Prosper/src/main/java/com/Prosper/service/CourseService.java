package com.Prosper.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Prosper.entity.AssignmentEntity;
import com.Prosper.entity.CourseEntity;
import com.Prosper.entity.UserEntity;
import com.Prosper.repository.CourseRepository;
import com.Prosper.request.model.CourseRequest;
import com.Prosper.response.model.CourseResponse;
import com.Prosper.response.model.UserResponse;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@Service
public class CourseService {
	@Autowired
	private CourseRepository courseRepository;
	
	private CourseEntity courseEntity = new CourseEntity();
	private CourseResponse courseResponse = new CourseResponse();
	
	public CourseResponse courseRegisterService(CourseRequest courseRequestModel) {
		CourseEntity courseId = courseRepository.findByCourseTitle(courseRequestModel.courseTitle);
		CourseEntity courseDesc = courseRepository.findByCourseDescription(courseRequestModel.courseDescripton);
		if(courseId != null && courseDesc != null) {
			courseResponse = new CourseResponse();
			courseResponse.courseId = courseId.courseId.intValue();
			courseResponse.response = "Course already exists!";
			return courseResponse;
		}else {
			courseResponse = new CourseResponse();
			courseEntity =  new CourseEntity();
			
			courseEntity.courseTitle = courseRequestModel.courseTitle;
			courseEntity.courseDescription = courseRequestModel.courseDescripton;
			
			courseRepository.save(courseEntity);
			
			CourseEntity courseIdDb = courseRepository.findByCourseTitle(courseRequestModel.courseTitle);
			courseResponse.courseId = courseIdDb.courseId.intValue();
			courseResponse.response = "Course registred successfully!";
			
			return courseResponse;
		}
	
	}

	public List<String> getCourseService() {
		List<String> courses = courseRepository.findCourseTitle();
		
		return courses;
	}

	public CourseEntity getCourseDetailsService(String courseTitle) {
		return courseRepository.findByCourseTitle(courseTitle);
	}
	
	

	
}
