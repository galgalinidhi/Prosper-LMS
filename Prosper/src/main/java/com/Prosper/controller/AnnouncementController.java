package com.Prosper.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Prosper.entity.AnnouncementEntity;
import com.Prosper.request.model.AnnouncementRequest;
import com.Prosper.response.model.AnnouncementResponse;
import com.Prosper.service.AnnouncementService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@RestController
@CrossOrigin
@RequestMapping("/announcement")
public class AnnouncementController {
	
	private static final Logger logger = LogManager.getLogger(AnnouncementController.class);
	
	@Autowired
	private AnnouncementService announcementService;
	
	@PostMapping("/add")
	public ResponseEntity<AnnouncementResponse> addAnnouncement(@RequestBody AnnouncementRequest announcementRequest) {
		logger.info("controller : announcement/add [POST]");
		AnnouncementResponse announcementResponse = announcementService.addAnnouncement(announcementRequest);
		if (announcementResponse.response == "Announcement title already exists") {
			return new ResponseEntity<>(announcementResponse, HttpStatus.CONFLICT); // HTTP status: 409
		} else {
		return new ResponseEntity<>(announcementResponse, HttpStatus.OK); // HTTP status: 200
		}
	}
	
	@GetMapping("/get")
	public ResponseEntity<List<AnnouncementEntity>> getAnnouncementController(@RequestParam String courseTitle) {
		logger.info("controller : announcement/get [POST]");
		return new ResponseEntity<>(announcementService.getAnnouncementService(courseTitle), HttpStatus.OK);
	}

}
