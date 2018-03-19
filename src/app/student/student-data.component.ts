import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student';
import { Programs } from './programs';
import { StudentService } from './studentservice';

@Component({
  selector: 'app-student-data',
  template: `
  <div class="container">          
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Student Id</th>
        <th>First Name</th>
        <th>Middle Name</th>
        <th>Last Name</th>
        <th>Programs</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor = "let stu of student">
        <td>{{stu.studentId}}</td>
        <td>{{stu.fName}}</td>
        <td>{{stu.mName}}</td>
        <td>{{stu.lName}}</td>
        <td>{{stu.Programs}}</td>
      </tr>
    </tbody>
  </table>
</div>
  `,
  styles: []
})

export class StudentDataComponent implements OnInit{
  
  student:Array<Student> = [];
   
   constructor(private studentService:StudentService) { }
 
   ngOnInit() {
     this.student = this.studentService.getStudents();

   }
 
 }


