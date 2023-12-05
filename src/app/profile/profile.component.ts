import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  firstName: FormGroup;
  lastName: FormGroup;
  phoneNumber: FormGroup;
  username: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.firstName = this.fb.group({
      firstName: ['', [Validators.required]]
    });
    this.lastName = this.fb.group({
      lastName: ['', [Validators.required]]
    });
    this.phoneNumber = this.fb.group({
      phoneNumber: ['', [Validators.required]]
    });
    this.username = this.fb.group({
      username: ['', [Validators.required]]
    });
  }

}
