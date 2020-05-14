import {AfterViewInit, Component, OnInit} from '@angular/core';
import { faTwitter, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import * as feather from 'feather-icons';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import {emailVerified} from '@angular/fire/auth-guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  //FontAwesome icons
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;

  contactForm = new FormGroup({
    name: new FormControl(
        '',
        [
            Validators.required,
            Validators.pattern('^([-A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\\s]*)$')
        ]),
    email: new FormControl(
        '',
        [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]
    ),
    message: new FormControl(
        '',
        Validators.required
    )
  })

  constructor() { }

  get formName() { return this.contactForm.get('name'); }
  get formEmail() { return this.contactForm.get('email'); }
  get formMessage() { return this.contactForm.get('message'); }

  ngOnInit() {
  }

  ngAfterViewInit() {
    feather.replace();
  }

  submitMessage() {
      if(this.contactForm.touched && this.contactForm.valid) {
          alert("Mensagem enviada.");
      }
  }

}
