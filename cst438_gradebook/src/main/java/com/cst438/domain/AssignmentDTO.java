package com.cst438.domain;

import java.sql.Date;

public class AssignmentDTO {
	public int assignmentId;
    public String assignmentName;
    public Date dueDate;
    public int courseId;
    public int needsGrading;

	public AssignmentDTO(String assignmentName, Date dueDate) {
        this.assignmentId = 0;
        this.assignmentName = assignmentName;
        this.dueDate = dueDate;
    }
	
	
    public AssignmentDTO(){
		java.sql.Date myDate = new java.sql.Date(System.currentTimeMillis());
		
		this.assignmentId = 0;
		this.assignmentName = "";
		this.dueDate = myDate;
		this.needsGrading = 0;
		
	}

	public int getAssignmentId() {
        return assignmentId;
    }

    public void setAssignmentId(int assignmentId) {
        this.assignmentId = assignmentId;
    }

    public String getAssignmentName() {
        return assignmentName;
    }

    public void setAssignmentName(String assignmentName) {
        this.assignmentName = assignmentName;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }
    
    public int getNeedsGrading() {
    	return needsGrading;
    }
    
    public void setNeedsGrading(int needsGrading) {
    	this.needsGrading = needsGrading;
    }

    @Override
    public String toString() {
        return "AssignmentDTO{" +
                "assignmentId=" + assignmentId +
                ", assignmentName='" + assignmentName + '\'' +
                ", dueDate='" + dueDate + '\'' +
                ", courseId=" + courseId +
                '}';
    }

}
