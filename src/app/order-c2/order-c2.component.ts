import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-c2',
  templateUrl: './order-c2.component.html',
  styleUrl: './order-c2.component.css'
})
export class OrderC2Component {

  isDateProvided: boolean = false;
  dateForm: FormGroup;
  description: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      date: [null, [Validators.required]]
    });
    this.description = this.fb.group({
      description: ['', [Validators.required]]
    });
  }

  dateChanged(event: any) {
    this.isDateProvided = !this.dateForm.get('date')?.hasError('required');
  }

}
