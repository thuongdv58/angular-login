import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) { }
  getQuestions(){
    return this.http.get('https://api.icp.sit.debugger.vn/api/question?skip=0&take=10&sorts=-updatedDate', {
        headers: new HttpHeaders({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).access_token })
      }
    ).subscribe(data => {
      console.log(data);
      return data;
    });
  }

}
