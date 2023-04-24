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
  public showSuccessMessage: boolean = false;

  constructor() {
    emailjs.init('XnqHnxSJzUBEOUi_z');
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    const emailParams = {
      to_name: 'Yvette Rosario',
      from_name: this.name,
      from_email: this.email,
      message: this.message
    };

    emailjs.send('service_bs96q2p', 'template_ayln9kw', emailParams, 'XnqHnxSJzUBEOUi_z')
      .then((result) => {
        console.log(result.text);
        console.log(emailParams);
        this.showSuccessMessage = true;
        this.name = '';
        this.email = '';
        this.message = '';
      }, (error) => {
        console.log(error.text);
      });
  }

}
