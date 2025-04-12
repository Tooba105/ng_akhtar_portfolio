// email.service.ts
import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceID = 'your_service_id';
  private templateID = 'your_template_id';
  private publicKey = 'your_public_key';

  constructor() {}

  sendEmail(templateParams: any): Promise<any> {
    return emailjs.send(this.serviceID, this.templateID, templateParams, this.publicKey);
  }
}
