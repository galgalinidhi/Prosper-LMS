package com.Prosper.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Prosper.entity.AnnouncementEntity;

public interface AnnouncementRepository extends JpaRepository<AnnouncementEntity, Integer> {
	
	@Query("SELECT max(a.announcementId) FROM AnnouncementEntity a WHERE a.announcementTitle = announcementTitle")
	List<String> findAnnouncementIdByAnnouncementTitle(@Param("announcementTitle") String announcementTitle);


	public List<AnnouncementEntity> findByCourseTitle(String courseTitle);
}
