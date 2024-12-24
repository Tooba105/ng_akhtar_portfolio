import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  constructor(public router:Router){

  }

  onHome(){
this.router.navigate(['./portfolio-website/home'])
  }
  onContact(){
    this.router.navigate(['./portfolio-website/contact'])
  }
  onSkills(){
    this.router.navigate(['./portfolio-website/skills'])
  }
  onAbout(){
    this.router.navigate(['./portfolio-website/about'])

  }

}
