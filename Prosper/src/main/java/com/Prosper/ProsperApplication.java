package com.Prosper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.Prosper.entity.RoleEntity;
import com.Prosper.repository.RoleRepository;

@SpringBootApplication
public class ProsperApplication implements CommandLineRunner{
	@Autowired
	private RoleRepository roleRepository;
	
	private RoleEntity roleEntity = new RoleEntity();

	public static void main(String[] args) {
		SpringApplication.run(ProsperApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		roleEntity = new RoleEntity();
		roleEntity.roleId = (long) 1;
		roleEntity.RoleName = "Student";
		roleRepository.save(roleEntity);
		
		roleEntity = new RoleEntity();
		roleEntity.roleId = (long) 2;
		roleEntity.RoleName = "Teacher";
		roleRepository.save(roleEntity);
		
		roleEntity = new RoleEntity();
		roleEntity.roleId = (long) 3;
		roleEntity.RoleName = "Admin";
		roleRepository.save(roleEntity);
		
	}

}
