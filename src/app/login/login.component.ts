import { Component, Input } from '@angular/core';
import { LoginData } from '../services/models/login-data-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Input()
  loginData: LoginData = {};

  loginToAccount() {
    console.log(this.loginData);
  }

}
