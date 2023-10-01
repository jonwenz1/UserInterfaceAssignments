/*
import { Component } from '@angular/core';
import { Email } from '../interfaces/email';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importieren Sie die benötigten Module

@Directive({
  selector: '[changeBackgroundColor]'
})
export class ChangeBackgroundColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    if (this.el.nativeElement.classList.contains('invalid-field')) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    }
  }

  @HostListener('blur') onBlur() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent {
  email: Email = {
    from: "",
    to: "",
    subject: "",
    body: "" 
  }

  emailForm: FormGroup; // Das FormGroup für Ihr Formular

  constructor(private formBuilder: FormBuilder) {
    // Initialisieren Sie das FormGroup und fügen Sie Validatoren hinzu
    this.emailForm = this.formBuilder.group({
      from: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      to: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      subject: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      body: ['']
    });
  }

  // Funktionen zur Validierung und Hintergrundfarbenänderung

  isFieldValid(field: string): boolean {
    const control = this.emailForm.get(field);
    return !!control?.touched && !!control?.invalid;
  }
  
  setFieldBackgroundColor(field: string): string {
    return this.isFieldValid(field) ? 'red' : '';
  }

}
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css'],
})
export class EmailReaderFormComponent implements OnInit {
  email!: Email;
  emailList!: Email[];

  @ViewChild('formEmail') formEmail: any;

  constructor() {
    this.emailList = [];
  }

  ngOnInit(): void {
    this.email = {
      from: '',
      to: '',
      subject: '',
      body: '',
    };
  }

  sendEmail(): void {
    window.alert(
      `The email from ${this.email.from} has been sent to ${this.email.to}`
    );

    // email creation and add it to emailList
    const email: Email = {
      from: this.email.from,
      to: this.email.to,
      subject: this.email.subject,
      body: this.email.body,
    };
    this.addEmail(email);
    this.formEmail.reset();
  }

  cleanEmailForm(): void {
    this.formEmail.reset();
  }

  // Add entry to emailList
  addEmail(email: Email) {
    this.emailList.push(email);
  }
}
