import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tsh-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private readonly router: Router) { }

  public login(event: Event): void {
    event.preventDefault();
    this.router.navigate(['']);
  }
}
