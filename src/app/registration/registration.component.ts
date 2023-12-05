import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationData } from '../services/models/registration-data-model';
import { RegistrationService } from '../services/register/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{

  emailForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  passwordForm: FormGroup;

  isEmailValid: boolean = false;
  isPasswordValid: boolean = false;

  isEmailOwned: boolean = false;
  isPasswordCorrect: boolean = false;

  constructor(
    private fb : FormBuilder,
    private registrationService : RegistrationService,
    private router: Router
  ) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,16}$/)]],
    });
  }

  validateEmail() {
    this.isEmailValid = !this.emailForm.get('email')?.hasError('required') && !this.emailForm.get('email')?.hasError('email');
  }

  validatePassword() {
    this.isPasswordValid = !this.passwordForm.get('password')?.hasError('required') && !this.passwordForm.get('password')?.hasError('pattern');
  }

  checkOverallCorrectness() {
    return this.isEmailValid && this.isPasswordValid;
  }

  onSubmit() {
    if(this.emailForm.valid && this.passwordForm.valid) {
      const registration: RegistrationData = new RegistrationData(
        this.emailForm.value.email,
        this.passwordForm.value.password
      );
      console.log(registration);
      this.isEmailValid = true;
      this.isPasswordValid = true;
      this.registrationService.createUser(registration)
                            .subscribe({
                              next: (data) => {
                                console.log(data)
                                this.router.navigateByUrl("/verify")
                              },
                              error: (error) => {
                                const response = error.error;
                                const message = response.message;
                                const status = error.status;
                                if(status === 400) {
                                  console.log(message);
                                  this.isEmailOwned = true;
                                } else if(status === 500) {
                                  this.router.navigateByUrl("/error");
                                }
                              }
                            });
    }
  }

  isNotIncludes(string:any, substring:any) {
    return string.toLowerCase().search(substring.toLowerCase());
  }
  
  
  ngOnInit(): void {
    
  }

}
