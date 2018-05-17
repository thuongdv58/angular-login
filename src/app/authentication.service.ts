import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json', 'Authorization': '' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router) { }
  login(username: string, password: string) {

    const body = new HttpParams()
      .set(`username`, username)
      .set(`password`, password)
      .set(`grant_type`, "password")
      .set(`scope`, "IcpAPI offline_access")
      .set(`client_id`, "icp-web-app");

      return this.http.post('https://api.icp.sit.debugger.vn/connect/token', body.toString(), httpOptions).subscribe(
          res => {
            console.log(res);
            localStorage.setItem('currentUser', JSON.stringify(res));
            this.router.navigate(['question']);
          },
          err => {
            console.log("Error occured");
            console.log(err.error.error_description == 'invalid_username_or_password');
            console.log(err["error_description"]);
          }
      );
;
    }
}
