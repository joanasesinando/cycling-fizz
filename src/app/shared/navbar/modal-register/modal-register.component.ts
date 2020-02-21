import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import {AuthFirebaseService} from "../../../_services/auth-firebase.service";
import {NgForm} from "@angular/forms";


export interface FormObject {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  eula: boolean;

}


@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent implements OnInit {

  // FontAwesome icons
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;

  @Output() onSignInClicked = new EventEmitter();
  @Output() onRegisterClicked = new EventEmitter();

  formData: FormObject;
  @ViewChild('f', { static: false }) f: NgForm;



  constructor(private authFirebaseService: AuthFirebaseService) {
    this.formData = ({} as FormObject);
  }

  ngOnInit() {
  }

  signInClicked() {
    this.onSignInClicked.emit();
  }



  registerClicked() {
    if (this.f.form.valid) {
      this.tryRegister(this.formData);
      this.onRegisterClicked.emit();
    } else {
      console.log("invalid form");
    }
  }

  tryRegister(value){
    this.authFirebaseService.doRegister(value)
        .then(res => {
          console.log("-----------------------------------");
          console.log(res.user);
          console.log("-----------------------------------");

          // res.user.updateProfile({
          //   displayName: value.username
          // });
        }, err => {
          console.log(err);
        })
  }
}
