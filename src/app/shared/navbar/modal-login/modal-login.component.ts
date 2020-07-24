import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
// import * as $ from 'jquery';

import {faFacebookF, faGooglePlusG, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {NgForm} from '@angular/forms';

import {AuthFirebaseService} from '../../../_services/auth-firebase.service';
import {NbToastrService} from '@nebular/theme';
import {Modals} from '../modal-auth-general/modal-auth-general.component';


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

  // @Output() onRegisterClicked = new EventEmitter();
  // @Output() onLogin = new EventEmitter();
  // @Output() onNewAccount = new EventEmitter();
  @Output() changeCurrentModal = new EventEmitter<Modals>();
  @Output() verifyEmail = new EventEmitter();



  formData: FormObject;

  @ViewChild('f', { static: false }) f: NgForm;

  constructor(private authFirebaseService: AuthFirebaseService, private toastrService: NbToastrService) {
    this.formData = ({} as FormObject);
  }

  ngOnInit() {
  }

  // noinspection JSMethodCanBeStatic
  closeThisModal() {
    $("#closeLoginBtn")[0].click();
    this.changeCurrentModal.emit(Modals.Login);
  }

  registerClicked() {
    // this.onRegisterClicked.emit();
    this.changeCurrentModal.emit(Modals.Register);
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
      if (res.user.metadata.a == res.user.metadata.b) {
        // this.onNewAccount.emit();
        this.changeCurrentModal.emit(Modals.CompleteRegister);
      } else {
        // console.log("Login successful");
        this.loginSuccessful();
      }

    }, err => {
      // console.log(err.message);
      // console.log(err);
      this.errorInLoginToastr(err.message);
    });
  }

  tryLogin(value) {
    this.authFirebaseService.doLoginOld(value).then(res => {
      // console.log(res);
      // console.log("Login successful");
      this.loginSuccessful();
    }, err => {
      // console.log(err);
      // console.log(err.message);
      this.errorInLoginToastr(err.message);
    });
  }


  loginSuccessful() {
    if (!this.authFirebaseService.isEmailVerified()) {
      this.verifyEmail.emit();
    }
    this.loginSuccessfulToastr();
    this.closeThisModal();
  }

  loginSuccessfulToastr() { //fixme translate
    this.toastrService.success("Bem vindo de volta!", "Login bem sucedido", {duration: 5000});
  }

  errorInLoginToastr(errorMsg :string) { //fixme translate
    this.toastrService.danger(errorMsg, "Erro no Login", {duration: 5000});
  }

}
