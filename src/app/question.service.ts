import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Question } from './question/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
    constructor(private http: HttpClient) { }
    getQuestions(): Observable<Question[]> {

		  const url = 'https://api.icp.sit.debugger.vn/api/question?skip=0&take=10&sorts=-updatedDate';
		  const httpOptions = {
	  	  headers: new HttpHeaders({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).access_token })
      }
      return this.http.get<Question[]>(url, httpOptions)
          .pipe(
            tap(heroes => console.log(`fetched heroes`)),
            catchError(this.errorHandler('get questions', []))
          );

    }
    private errorHandler<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
}
