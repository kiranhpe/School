import { Injectable } from '@angular/core';
import { Student } from './models/student.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }

  GetStudents():Observable<Student[]>{

    return this._http.get<Student[]>('https://jsonplaceholder.typicode.com/users');
  }
}
