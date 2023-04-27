package com.cst438.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cst438.domain.*;

@RestController

public class AssignmentController {
	@Autowired
	AssignmentRepository assignmentRepository;
	
	@Autowired
	CourseRepository courseRepository;
	
	@PostMapping("/assignment/add{email}")
	@Transactional
	public AssignmentDTO createAssignment( @RequestBody AssignmentDTO newAssignment, @PathVariable String email) {
		Assignment assignment = assignmentRepository.findById(newAssignment.getAssignmentId());
		
		int newCourseId;
		if(email.equalsIgnoreCase(assignment.getCourse().getInstructor())) {
			newCourseId = assignment.getCourse().getCourse_id();
		} else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You cannot add assignments to this course.");
		}
		
		Assignment a = new Assignment();
		a.setName(newAssignment.getAssignmentName());
		a.setDueDate(newAssignment.getDueDate());
		
		Assignment savedAssignment = assignmentRepository.save(a);
		
		AssignmentDTO result = createAssignmentDTO(savedAssignment);
		return result;
	}
	
	@PutMapping("/assignment/editName{assignmentId}")
	@Transactional
	public void editAssignment(@RequestBody String name, @PathVariable int assignmentId) {
		String email = "dwisneski@csumb.edu"; //make sure email is that of instructor

		Assignment assignment = assignmentRepository.findById(assignmentId);
		if(assignment == null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"There already exists an assignment with that name.");
		} else {
			if(assignment.getCourse().getInstructor().equalsIgnoreCase(email)) {
				assignment.setName(name);
				
				assignmentRepository.save(assignment);
			
			}
		}
		
	}
	
	@DeleteMapping("/assignment/delete{id}")
	@Transactional
	public ResponseEntity<Void> deleteAssignment(@PathVariable int id){
		Assignment assignment = assignmentRepository.findById(id);
		
		if(assignment == null) {
			return ResponseEntity.notFound().build();
		} else {
			assignmentRepository.delete(assignment);
		}
		
		
		
		return ResponseEntity.ok().build();
		
	}
	
	

	private AssignmentDTO createAssignmentDTO(Assignment savedAssignment) {
		AssignmentDTO assignmentDTO = new AssignmentDTO();
		assignmentDTO.assignmentName = savedAssignment.getName();
		assignmentDTO.assignmentId = savedAssignment.getId();
		assignmentDTO.dueDate = savedAssignment.getDueDate();
		assignmentDTO.courseId = savedAssignment.getCourse().getCourse_id();
		assignmentDTO.needsGrading = savedAssignment.getNeedsGrading();
		return null;
	}
	

}
