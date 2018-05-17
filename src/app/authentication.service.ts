import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor() { }
    login(username: string, password: string) {
        console.log(username);
        console.log(password);
    }
}
