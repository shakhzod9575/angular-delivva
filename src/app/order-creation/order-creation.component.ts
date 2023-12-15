import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-creation',
  templateUrl: './order-creation.component.html',
  styleUrl: './order-creation.component.css'
})
export class OrderCreationComponent {
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  onSubmit() {
    this.router.navigate(['map'], {relativeTo:this.route})
  }

}
