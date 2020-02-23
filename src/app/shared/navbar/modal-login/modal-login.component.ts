import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import * as $ from 'jquery';

import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import {NgForm} from "@angular/forms";

import { AuthFirebaseService } from '../../../_services/auth-firebase.service';


export interface FormObject {
  email: string;
  password: string;
}

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})



export class ModalLoginComponent implements OnInit {

  // FontAwesome icons
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;

  @Output() onRegisterClicked = new EventEmitter();
  @Output() onLogin = new EventEmitter();


  formData: FormObject;

  @ViewChild('f', { static: false }) f: NgForm;

  constructor(private authFirebaseService: AuthFirebaseService) {
    this.formData = ({} as FormObject);
  }

  ngOnInit() {
  }

  // noinspection JSMethodCanBeStatic
  closeThisModal() {
    $("#closeLoginBtn")[0].click()
  }

  registerClicked() {
    this.onRegisterClicked.emit();
  }


  loginClicked() {
    if (this.f.form.valid) {
      this.tryLogin(this.formData)
    } else {
      console.log("invalid form");
    }
  }

  loginWithGoogle() {
    this.tryLoginWithGoogle();
  }

  tryLoginWithGoogle(){
    this.authFirebaseService.doGoogleLogin().then(res => {
      console.log(res);
      console.log("Login successful");
      this.closeThisModal();
    }, err => {
      console.log(err);
      console.log(err.message);
    });
  }

  tryLogin(value) {
    this.authFirebaseService.doLogin(value).then(res => {
      console.log(res);
      console.log("Login successful");
      this.closeThisModal();
      // this.onLogin.emit();
    }, err => {
      console.log(err);
      console.log(err.message);
    });
  }
}
