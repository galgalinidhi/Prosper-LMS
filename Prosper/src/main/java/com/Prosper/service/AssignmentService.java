package com.Prosper.service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.Prosper.entity.AssignmentEntity;
import com.Prosper.entity.CourseEntity;
import com.Prosper.entity.UserEntity;
import com.Prosper.repository.AssignmentRepository;
import com.Prosper.repository.CourseRepository;
import com.Prosper.request.model.AssignmentRequest;
import com.Prosper.request.model.CourseRequest;
import com.Prosper.response.model.AssignmentResponse;
import com.Prosper.response.model.CourseResponse;
import com.Prosper.response.model.UserResponse;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@Service
public class AssignmentService {
	@Autowired
	private AssignmentRepository assignmentRepository;
	
	private AssignmentEntity assignmentEntity = new AssignmentEntity();
	private AssignmentResponse assignmentResponse = new AssignmentResponse();
	
	public AssignmentResponse courseRegisterService(AssignmentRequest assignmentRequestModel) {
		
		
		assignmentResponse = new AssignmentResponse();
		assignmentEntity =  new AssignmentEntity();
		
		assignmentEntity.assignmentTitle = assignmentRequestModel.assignmentTitle;
		assignmentEntity.assignmentDescription = assignmentRequestModel.assignmentDescripton;
		assignmentEntity.courseTitle = assignmentRequestModel.courseTitle;
		assignmentRepository.save(assignmentEntity);
			
		AssignmentEntity assignmentIdDb = assignmentRepository.findByAssignmentTitle(assignmentRequestModel.assignmentTitle);
		assignmentResponse.assignmentId = assignmentIdDb.assignmentId.intValue();
		assignmentResponse.response = "Assignment successfully registered!";
			
		return assignmentResponse;
		
	
	}

	public List<AssignmentEntity> getAssignment(String courseTitle) {
		// TODO Auto-generated method stub
		List<AssignmentEntity> announcements = assignmentRepository.findByCourseTitle(courseTitle);
		
		return announcements;

	}
	
	
	public String store(MultipartFile file) throws IOException {
//	    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
	    AssignmentEntity FileDB = new AssignmentEntity(file.getBytes());
	    assignmentRepository.save(FileDB);
	    return "OK";
	  }
	
	public AssignmentEntity getFile(String id) {
	    return assignmentRepository.findById(id).get();
	  }
	  
	  public Stream<AssignmentEntity> getAllFiles() {
	    return assignmentRepository.findAll().stream();
	  }
	
}

