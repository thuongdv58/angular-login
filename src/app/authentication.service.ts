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
            grant_type: password,
            scope: 'IcpAPI offline_access',
            client_id: 'icp-web-app'
        };
        console.log(body);
        return this.httpClient.post("https://api.icp.sit.debugger.vn/connect/token", body, httpOptions).pipe(
            tap((data: any) => console.log('gg1',data)),
            catchError(this.handleError('getHeroes', []))
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
}
