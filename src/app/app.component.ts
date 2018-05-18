import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'login-project';
    loggedIn :any;
    constructor(private authenticationService: AuthenticationService) {
        this.loggedIn = authenticationService.isLoggedIn();
    }
    logout() {
        this.authenticationService.logout();
    }

  
}
