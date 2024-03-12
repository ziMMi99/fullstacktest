package com.project.fullstacktest.controller;

import com.project.fullstacktest.model.Student;
import com.project.fullstacktest.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "Student added successfully";
    }

    @GetMapping("/getAll")
    public List<Student> getAll() {
        return studentService.getAllStudents();
    }
}
