import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json', 'Authorization': '' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
    private loggedIn: Subject < boolean > = new Subject<boolean>();;
  constructor(private http: HttpClient, private router: Router) {
      this.loggedIn.next(!!localStorage.getItem('authToken'));
  }
  login(username: string, password: string) {
    const url = 'https://api.icp.sit.debugger.vn/connect/token';
    const body = new HttpParams()
      .set(`username`, username)
      .set(`password`, password)
      .set(`grant_type`, "password")
      .set(`scope`, "IcpAPI offline_access")
      .set(`client_id`, "icp-web-app");

      return this.http.post(url, body.toString(), httpOptions).subscribe(
          res => {
              localStorage.setItem('currentUser', JSON.stringify(res));
              this.loggedIn.next(true);
              this.router.navigate(['question']);
          },
          err => {
            console.log("Error occured");
            console.log(err.error.error_description == 'invalid_username_or_password');
            console.log(err["error_description"]);
          }
      );
  }

  isLoggedIn() {
      return this.loggedIn.asObservable();
  }
  logout() {
      localStorage.removeItem('currentUser');
      this.loggedIn.next(false);
      this.router.navigate['/login'];
  }
}
