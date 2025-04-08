import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  showEducation: boolean = true;
  showProjects: boolean = true;
  private router = inject(Router);

  projects = [
    { name: 'Project 1', description: 'Description of Project 1' },
    { name: 'Project 2', description: 'Description of Project 2' },
    { name: 'Project 3', description: 'Description of Project 3' },
  ];

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';
    link.download = 'Muhammad-Akhtar-CV.pdf'; // customize filename as needed
    link.click();
  }
  goToContact() {
    this.router.navigate(['/contact']);
  }
}
