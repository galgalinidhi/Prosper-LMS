package com.Prosper.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Prosper.entity.AnnouncementEntity;
import com.Prosper.repository.AnnouncementRepository;
import com.Prosper.request.model.AnnouncementRequest;
import com.Prosper.response.model.AnnouncementResponse;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@Service
public class AnnouncementService {
	
private static final Logger logger = LogManager.getLogger(AnnouncementService.class);
	
	@Autowired
	private AnnouncementRepository announcementRepository;
	
	private AnnouncementEntity announcementEntity= new AnnouncementEntity();
	
	private AnnouncementResponse announcementResponse = new AnnouncementResponse();
	
	public AnnouncementResponse addAnnouncement(AnnouncementRequest announcementRequest) {

		announcementEntity = new  AnnouncementEntity();
		announcementEntity.courseTitle = announcementRequest.courseTitle;
		announcementEntity.announcementTitle = announcementRequest.announcementTitle;
		announcementEntity.announcementDescription = announcementRequest.announcementDescription;
		
		announcementRepository.save(announcementEntity);
		
		List<String> announcementIdDB = announcementRepository.findAnnouncementIdByAnnouncementTitle(announcementRequest.announcementTitle);
		announcementResponse.announcementId = announcementIdDB;
		logger.info("Announcement Service: announcementIdDB: "+announcementIdDB + " announcementTitle "+announcementRequest.announcementTitle);
		return announcementResponse;
	}

	public List<AnnouncementEntity> getAnnouncementService(String courseTitle) {
		List<AnnouncementEntity> announcements = announcementRepository.findByCourseTitle(courseTitle);
		logger.info("Announcement  GET Service: courseTitle: "+courseTitle);
		return announcements;
	}
	

}
