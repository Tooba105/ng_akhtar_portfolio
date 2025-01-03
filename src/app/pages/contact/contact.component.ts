import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  userForm: any;

  constructor(public formbuilder: FormBuilder) {}
  ngOnInit() {
    this.userForm = this.formbuilder.group({
      name: [null],
      email: [null],
      message: [null],
    });
  }
  onSubmit() {
    console.log('Form Submitted', this.userForm.value);
  }
}
