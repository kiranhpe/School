import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-stundent',
  templateUrl: './stundent.component.html',
  styleUrls: ['./stundent.component.css']
})
export class StundentComponent implements OnInit {

  students: Student[] = [];
  constructor(private _student: StudentService) { }

  ngOnInit(): void {
   this._student.GetStudents().subscribe((data: Student[]) => {
     this.students = data;
   });
  }

}
