import { Student } from "./student";
import { Programs } from "./programs";
import { Injectable } from "@angular/core";

@Injectable()

export class StudentService{
    student:Array<Student>=[new Student(1,'John','K','Patrick',Programs.CS)];

    getStudents(){
        return this.student;
    }

    addStudent(student){
        //console.log(typeof student);
        student.studentId = this.getId();
          this.student.push(student);
             //console.log(student);
      }
    
    getId(){
        let maxid = 0;
        for(let s of this.student){
          if(s.studentId>maxid){
            maxid=s.studentId;
          }
        }
          return maxid+1;
          }
}
