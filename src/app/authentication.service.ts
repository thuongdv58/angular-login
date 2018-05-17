import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(private httpClient: HttpClient) { }
    login(username: string, password: string) {
        const body = {
            username: username,
            password: password,
            grant_type: 'password',
            scope: 'IcpAPI offline_access',
            client_id: 'icp-web-app'
        };
        console.log(body);
        return this.httpClient.post("https://api.icp.sit.debugger.vn/connect/token", body, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleErrorObservable)
        );
;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.log('gg2',error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    extractData(res: Response) {
        let body = res.json();
        console.log('gg');
        console.log(body);
        return body || {};
    }
    handleErrorObservable(error: Response | any) {
        console.log('ggg2');
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    } 
}
