import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthFirebaseService} from "../../../_services/auth-firebase.service";
import {ServerHandlerService} from "../../../_services/server-handler.service";
import {NbComponentStatus, NbGlobalPosition, NbToastrService} from "@nebular/theme";
import * as $ from 'jquery';

export interface FormObject {
  username: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-modal-complete-registration',
  templateUrl: './modal-complete-registration.component.html',
  styleUrls: ['./modal-complete-registration.component.scss']
})

export class ModalCompleteRegistrationComponent implements OnInit {

  formData: FormObject;

  @ViewChild('f', { static: false }) f: NgForm;

  constructor(private serverHandlerService: ServerHandlerService, private authFirebaseService: AuthFirebaseService, private toastrService: NbToastrService) {
    this.formData = ({} as FormObject);
  }

  ngOnInit(): void {
  }

  // noinspection JSMethodCanBeStatic
  closeThisModal() {
    $("#closeLoginBtn")[0].click();
  }

  completeRegistration(){
    if (this.f.form.valid) {
      this.serverHandlerService.doCompleteUserProfileRegistry(this.authFirebaseService.currentUserIdToken, this.formData);
      this.showSuccessRegistrationToaster();
      this.closeThisModal();
    } else {
      console.log("invalid form");
    }
  }

  showSuccessRegistrationToaster() {
    this.toastrService.success("Bem vindo!", "Registo efetuado com sucesso!");
  }

  errorInRegistrationToastr(errorMsg :string) {
    this.toastrService.danger(errorMsg, "Erro a completar o registo!");
  }
}
