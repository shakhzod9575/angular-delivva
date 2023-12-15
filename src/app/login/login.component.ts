import { Component, Input } from '@angular/core';
import { LoginData } from '../services/models/login-data-model';
import { LoginService } from '../services/login/login.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: FormGroup;
  password: FormGroup;

  constructor(
            private loginService: LoginService,
            private fb: FormBuilder,
            private router: Router
  ) {
    this.username = this.fb.group({
      username: ['', [Validators.required, this.customUsernameValidator()]]
    })
    this.password = this.fb.group({
      password: ['', Validators.required]
    })
  }

  isUsernameValid: boolean = false;
  isPasswordValid: boolean = false;

  customUsernameValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const lettersWithOptionalNumbersPattern = /^[a-zA-Z0-9]*$/;
      if (!emailPattern.test(value) && !lettersWithOptionalNumbersPattern.test(value)) {
        return { invalidFormat: true };
      }
      return null;
    };
  }

  validateUsername() {
    this.isUsernameValid = !this.username.get('username')?.hasError('invalidFormat') && !this.username.get('username')?.hasError('required');
  }

  validatePassword() {
    this.isPasswordValid = !this.password.get('password')?.hasError('required');
  }

  checkAllCorrect() {
    return this.isUsernameValid && this.isPasswordValid;
  }

  loginToAccount() {
    let loginData = {
      login: this.username.value.username,
      password: this.password.value.password
    };
    this.loginService.loginViaCredentials(loginData)
              .subscribe({
                next: (data: any) => {
                  console.log(data);
                  this.router.navigateByUrl("/dashboard")
                },
                error: (error: any) => {
                  this.router.navigateByUrl("/login");
                }
              });
  }

  loginOauth() {
    this.loginService.loginViaOauth()
            .subscribe({
              next: (data) => {
                console.log(data);
              }
            })
  }

}
