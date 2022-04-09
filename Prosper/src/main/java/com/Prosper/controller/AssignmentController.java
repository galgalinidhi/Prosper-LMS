package com.Prosper.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.Prosper.entity.AssignmentEntity;
import com.Prosper.request.model.AssignmentRequest;
import com.Prosper.response.model.AssignmentResponse;
import com.Prosper.response.model.UploadFileResponse;
import com.Prosper.service.AssignmentService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@RestController
@CrossOrigin
@RequestMapping("/assignment")
public class AssignmentController {

	@Autowired
	private AssignmentService assignmentService;

	@PostMapping("/add")
	public AssignmentResponse courseData(@RequestBody AssignmentRequest courseRequestModel) throws Exception {

		return assignmentService.courseRegisterService(courseRequestModel);
	}
	// TODO : change the response codes

	@GetMapping("/get")
	public List<AssignmentEntity> getassignmentData(@RequestParam String courseTitle) {

		return assignmentService.getAssignment(courseTitle);
	}

	@SuppressWarnings("static-access")
	@PostMapping("/uploadFile")
	public UploadFileResponse uploadFile(@RequestParam("assignmentTitle") String assignmentTitle,
			@RequestParam("courseTitle") String courseTitle, @RequestParam("file") MultipartFile file)
			throws Exception {
		AssignmentEntity dbFile = assignmentService.storeFile(file, assignmentTitle, courseTitle);

		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/")
				.fromPath(dbFile.assignmentId.toString()).toUriString();

		return new UploadFileResponse(dbFile.fileName, fileDownloadUri, file.getContentType(), file.getSize());
	}

	@GetMapping("/downloadFile/{fileId}")
	public ResponseEntity<Resource> downloadFile(@PathVariable Long fileId) {
		// Load file from database
		AssignmentEntity dbFile = assignmentService.getFile(fileId);

		return ResponseEntity.ok().contentType(MediaType.parseMediaType(dbFile.fileType))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.fileName + "\"")
				.body(new ByteArrayResource(dbFile.data));
	}

}
