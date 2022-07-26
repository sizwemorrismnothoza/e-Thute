import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

import {Learner} from '../Model/Learner';
//import { TypeModifier } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})

export class HttpLearnerService {

  currentLearner:String;

  baseUrl = 'http://localhost:3030/learners';
  
  constructor(private http:HttpClient) { }

  //http headers

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //post 
  public registerLearner(data):Observable<Learner>{
      this.currentLearner = data.email;
      console.log(this.currentLearner)
      return this.http.post<Learner>(this.baseUrl,JSON.stringify(data), this.HttpOptions)
        .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
      
     
  }
  //get learner by id
  getLearner(id):Observable<Learner>{
    return this.http.get<Learner>(this.baseUrl+"/"+id)
    .pipe(retry(1),
    catchError(this.errorHandl)
      )
  }

  //get learners 
  getEmployees() : Observable<Learner>{
    return this.http.get<Learner>(this.baseUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  //put update learner
  updateLearner(id,data):Observable<Learner>{
    return this.http.put<Learner>(this.baseUrl+'/'+id, JSON.stringify(data))
    .pipe(retry(1),
    catchError(this.errorHandl))
  }

  public deleteEmployee(employee){
    return this.http.delete<Learner>(this.baseUrl + "/"+employee.empId);
  }



  getHeaders(){
    let username='admin'
    let password='password'

    let basicString = 'Basic ' + window.btoa(username + ':' + password)
    return basicString;
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
