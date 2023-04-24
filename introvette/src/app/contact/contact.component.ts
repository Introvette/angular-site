import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public name: string = '';
  public email: string = '';
  public message: any = '';

  constructor() {
    emailjs.init('XnqHnxSJzUBEOUi_z');
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm('service_bs96q2p', 'template_ayln9kw', e.target as HTMLFormElement, 'YOUR_USER_ID_FROM_EMAILJS')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        // TODO: show success message to the user
      }, (error) => {
        console.log(error.text);
        // TODO: show error message to the user
      });
  }

}
