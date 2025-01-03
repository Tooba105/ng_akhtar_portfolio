import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(public router: Router) {}

  onHome() {
    this.router.navigate(['/']);
  }
  onContact() {
    this.router.navigate(['/contact']);
  }
  onSkills() {
    this.router.navigate(['/skills']);
  }
  onAbout() {
    this.router.navigate(['/about']);
  }
}
