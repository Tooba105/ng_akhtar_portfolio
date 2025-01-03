import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'HTML', level: 'Expert', icon: 'assets/html-icon.png' },
    { name: 'CSS', level: 'Intermediate', icon: 'assets/css-icon.png' },
    { name: 'JavaScript', level: 'Advanced', icon: 'assets/js-icon.png' },
    { name: 'Angular', level: 'Intermediate', icon: 'assets/angular-icon.png' },
    { name: 'React', level: 'Beginner', icon: 'assets/react-icon.png' },
    { name: 'Node.js', level: 'Intermediate', icon: 'assets/node-icon.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
