import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import {AuthFirebaseService} from "../../../_services/auth-firebase.service";
import {NgForm} from "@angular/forms";
import {NbToastrService} from '@nebular/theme';
// import * as $ from 'jquery';
import {Modals} from '../modal-auth-general/modal-auth-general.component';


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

  // @Output() onSignInClicked = new EventEmitter();
  // @Output() onRegisterClicked = new EventEmitter();
  @Output() changeCurrentModal = new EventEmitter<Modals>();


  formData: FormObject;
  @ViewChild('f', { static: false }) f: NgForm;



  constructor(private authFirebaseService: AuthFirebaseService, private toastrService: NbToastrService) {
    this.formData = ({} as FormObject);
  }

  ngOnInit() {
  }

  closeThisModal() {
    $("#closeRegisterBtn")[0].click();
    this.changeCurrentModal.emit(Modals.Login)
  }

  signInClicked() {
    // this.onSignInClicked.emit();
    this.changeCurrentModal.emit(Modals.Login);
  }

  registerWithGoogle() {
    this.tryRegisterWithGoogle();
  }

  registerClicked() {
    if (this.f.form.valid) {
      this.tryRegister(this.formData);
    } else {
      console.log("invalid form");
    }
  }

  tryRegister(value){
    this.authFirebaseService.doRegister(value)
        .then(res => {
          // console.log("-----------------------------------");
          // console.log(res.user);
          // console.log("-----------------------------------");
          // this.onRegisterClicked.emit();
          this.changeCurrentModal.emit(Modals.CompleteRegister)
        }, err => {
          this.errorInRegistrationToastr(err.message);
        })
  }

  tryRegisterWithGoogle(){
    this.authFirebaseService.doGoogleLogin().then(res => {
      if (res.additionalUserInfo.isNewUser) {
        // this.onRegisterClicked.emit();
        this.changeCurrentModal.emit(Modals.CompleteRegister)
      } else {
        this.loginSuccessfulToastr();
        this.closeThisModal();
      }
      // console.log(res);
      // console.log("Login successful");
    }, err => {
      // console.log(err.message);
      // console.log(err);
      this.errorInRegistrationToastr(err.message);
    });
  }

  errorInRegistrationToastr(errorMsg :string) {
    this.toastrService.danger(errorMsg, "Erro no Registo", {duration: 5000});
  }

  loginSuccessfulToastr() {
    this.toastrService.success("Bem vindo de volta!", "Login bem sucedido", {duration: 5000});
  }
}
