package com.Prosper.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
	
	public AssignmentResponse courseRegisterService(AssignmentRequest assignmentRequestModel) throws Exception {
		
		
		assignmentResponse = new AssignmentResponse();
//		if(file!= null) {
//			AssignmentService assignmentService = new AssignmentService();
//			String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//			assignmentEntity =  new AssignmentEntity(fileName, file.getContentType(), file.getBytes());
////			AssignmentEntity dbFile = assignmentService.storeFile(file);
//
//			String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/").fromPath(dbFile.assignmentId.toString())
//					.toUriString();
//		}
//		else {
//			assignmentEntity = new AssignmentEntity();
//		}
		assignmentEntity = new AssignmentEntity();
		assignmentEntity.assignmentTitle = assignmentRequestModel.assignmentTitle;
		assignmentEntity.assignmentDescription = assignmentRequestModel.assignmentDescripton;
		assignmentEntity.courseTitle = assignmentRequestModel.courseTitle;
		// Save file
//		if(file != null) {
//			String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//	
//	        try {
//	            // Check if the file's name contains invalid characters
//	            if(fileName.contains("..")) {
//	                throw new Exception("Sorry! Filename contains invalid path sequence " + fileName);
//	            }
//	
////	            AssignmentEntity dbFile = new AssignmentEntity(fileName, file.getContentType(), file.getBytes());
//	
////	             assignmentRepository.save(dbFile);
//	        } catch (IOException ex) {
//	            throw new Exception("Could not store file " + fileName + ". Please try again!", ex);
//	        }
//		}
		
		
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
	
	
//	public String store(MultipartFile file) throws IOException {
////	    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//	    AssignmentEntity FileDB = new AssignmentEntity(file.getBytes());
//	    assignmentRepository.save(FileDB);
//	    return "OK";
//	  }
//	
//	
//	  
//	  public Stream<AssignmentEntity> getAllFiles() {
//	    return assignmentRepository.findAll().stream();
//	  }
//
//	public Optional<AssignmentEntity> getFile(Long id) {
//		// TODO Auto-generated method stub
//		return assignmentRepository.findById(id);
//	}
//
//	public AssignmentEntity getFile(String fileName) {
//		// TODO Auto-generated method stub
//		return assignmentRepository.findByUploadAssignmentQuestion(fileName);
//	}
	
	public AssignmentEntity storeFile(MultipartFile file, String assignmentTitle, String courseTitle) throws Exception {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new Exception("Sorry! Filename contains invalid path sequence " + fileName);
            }
            AssignmentEntity assignmentId = assignmentRepository.findByAssignmentTitle(assignmentTitle);
            AssignmentEntity dbFile = new AssignmentEntity(fileName, file.getContentType(), file.getBytes(), assignmentTitle, courseTitle, assignmentId.assignmentId, assignmentId.assignmentDescription);
//            dbFile = assignmentRepository.findByAssignmentTitle(assignmentTitle);
            return assignmentRepository.save(dbFile);
        } catch (IOException ex) {
            throw new Exception("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public AssignmentEntity getFile(Long fileId) {
        return assignmentRepository.findById(fileId)
                .orElseThrow();
    }
}

