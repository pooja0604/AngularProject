import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from './student';
import { Programs } from './programs';
import { StudentService} from './studentservice'

@Component({
  selector: 'app-student-form',
  template: `
  <div class="container">
  <h3> Student Form</h3>
  <form>
  <div class="form-group">

    <label for="studentId">ID:</label>
    <input type="studentId" class="form-control"  disabled id="studentId" name="studentId" placeholder="Enter your Student ID">
    </div>
  
    <div class="form-group">
      <label for="fName">First Name:</label>
      <input type="fName" class="form-control" id="fName" name="fName" [(ngModel)]="student.fName"  placeholder="Enter your first name">
    </div>
    <div class="form-group">
      <label for="mName">Middle Name:</label>
      <input type="mName" class="form-control" id="mName" name="mName" [(ngModel)]="student.mName" placeholder="Enter your middle name">
    </div>
    <div class="form-group">
      <label for="lName">Last Name:</label>
      <input type="lName" class="form-control" id="lName" name="lName" [(ngModel)]="student.lName" placeholder="Enter your last name">
    </div>
    
    <div class="form-group">
      <label for="Programs">Programs :</label>
      <select class="form-control" id="Programs" name="Programs" [(ngModel)]="student.Programs">
        <option>Select</option>
        <option>MIS</option>
        <option>CS</option>
        <option>EM</option>
        <option>SWEN</option>
      </select>
      </div>
      <button type="button" class="bt btn-primary "(click)="addStudent()">Submit</button>
  </form>
  </div> 
  `,
  styles: []
})

export class StudentFormComponent implements OnInit{

  student:Student = new Student(2 ,"James","M","Thomas",Programs.MIS);

  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }

  addStudent(){
    this.studentService.addStudent(this.student);
    this.student = new Student(2 ,"James","M","Thomas",Programs.MIS);
  }
  
  getId(){
    this.studentService.getId();
  }
}
