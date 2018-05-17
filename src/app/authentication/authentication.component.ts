import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {


  loginForm: FormGroup;
  username: string = '';
  password: string = '';
  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService) {
      this.loginForm = formBuilder.group({
          username: [null, Validators.required],
          password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
      })
  }

  login(data) {
      this.authService.login(data.username, data.password);
  }
  ngOnInit() {
  }




}
