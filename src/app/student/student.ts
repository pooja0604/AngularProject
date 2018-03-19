import { Programs } from "./programs";

export class Student {

    constructor (

        public studentId: number,
        public fName: String,
        public mName: String,
        public lName: String,
        public Programs: Programs
    
    ) {}
      
}