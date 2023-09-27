import { Component } from '@angular/core'; //OnInit necessary, see example of professor??
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.css']
})
export class EmailReaderBasicComponent {
  email: Email = {
    from:"",
    to:"",
    subject:"",
    body:""
  }

  message=""; 

  sendEmail() {
    this.message = `E-Mail sent!<br>
    From: ${this.email.from}<br>
    To: ${this.email.to}<br>
    Subject: ${this.email.subject}<br>
    Body: ${this.email.body}`;

    // Formularfelder zurücksetzen
    this.email = {
      from: '',
      to: '',
      subject: '',
      body: ''
    };
  }

  cleanFields() {
    this.email= {
      from: "",
      to: "",
      subject: "",
      body: ""
    };
  }

}
