import { Injectable } from '@angular/core';
import { Student } from './models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  GetStudents():Student[]{
    let students: Student[] = [
      {
        id:1,
        name:'Kiran'
      },
      {
        id:2,
        name: 'Chethan'
      }
    ];

    return students;
  }
}
