package com.example.demo;

import java.util.Optional;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.junit4.rules.SpringClassRule;

import com.example.run.Project1Application;



@SpringBootTest(classes=Project1Application.class)
class Project1ApplicationTests {
	
	

	@Test
	void contextLoads() {
		
	System.out.print("гоюл");
		
	
	}

}
