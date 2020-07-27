import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthFirebaseService} from "../../../_services/auth-firebase.service";
import {AuthServerHandlerService} from "../../../_services/auth-server-handler.service";
import {NbComponentStatus, NbGlobalPosition, NbToastrService} from "@nebular/theme";
// import * as $ from 'jquery';
import {Modals} from '../modal-auth-general/modal-auth-general.component';

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

  @Output() changeCurrentModal = new EventEmitter<Modals>();


  formData: FormObject;

  @ViewChild('f', { static: false }) f: NgForm;

  constructor(private authServerHandlerService: AuthServerHandlerService, private authFirebaseService: AuthFirebaseService, private toastrService: NbToastrService) {
    this.formData = ({} as FormObject);
  }

  ngOnInit(): void {
  }

  // noinspection JSMethodCanBeStatic
  closeThisModal() {
    $("#closeCompleteRegisterBtn")[0].click();
    this.changeCurrentModal.emit(Modals.Login);
  }

  completeRegistration = async() => {

    if (this.f.form.valid) {
      if(await this.authFirebaseService.checkIfUsernameExists(this.formData.username)) {
        //name already exists
        this.f.form.controls["inputUsername"].setErrors({ nonUnique: true });
        return;
      }
      this.authServerHandlerService.doCompleteUserProfileRegistry(this.formData)
          .then(response => {
            console.log(response);
            if (response.status != 200) {
              response.text()
                  .then(msg => this.errorInRegistrationToastr(msg))
            } else {
              this.showSuccessRegistrationToaster();
              this.closeThisModal();
            }
          })
          .catch(err => this.errorInRegistrationToastr("Error connecting to server. Try again.")); //fixme translate
    } else {
      console.log("invalid form");
    }
  };

  showSuccessRegistrationToaster() { //fixme translate
    this.toastrService.success("Bem vindo!", "Registo efetuado com sucesso!", {duration: 5000});
  }

  errorInRegistrationToastr(errorMsg :string) { //fixme translate
    this.toastrService.danger(errorMsg, "Erro a completar o registo!", {duration: 5000});
  }
}
