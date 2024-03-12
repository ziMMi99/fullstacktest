package com.project.fullstacktest.service;

import com.project.fullstacktest.model.Student;

import java.util.List;

public interface StudentService {
    Student saveStudent(Student student);
    List<Student> getAllStudents();
}
