import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

import {Subject} from '../Model/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor( private httpSubject:HttpClient) { }

  baseUrl = 'http://localhost:3030/subjects';

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllSubjects() : Observable<Subject>{
    return this.httpSubject.get<Subject>(this.baseUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  errorHandl(error){
    let errorMessage = '';
    
    if(error.error instanceof ErrorEvent){
      //get client-side error
      errorMessage = error.error.message;
      
    }else{
      //get server error
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
