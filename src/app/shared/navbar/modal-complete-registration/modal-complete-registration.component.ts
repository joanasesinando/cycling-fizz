import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthFirebaseService} from "../../../_services/auth-firebase.service";
import {ServerHandlerService} from "../../../_services/server-handler.service";
import {NbComponentStatus, NbGlobalPosition, NbToastrService} from "@nebular/theme";

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

  completeRegistration(){
    if (this.f.form.valid) {
      this.serverHandlerService.doCompleteUserProfileRegistry(this.authFirebaseService.currentUserIdToken, this.formData);
      this.showSuccessRegistrationToster("titulo", "mensagem")
    } else {
      console.log("invalid form");
    }
  }

  showSuccessRegistrationToster(title :string, msg :string) {
    let position :NbGlobalPosition = 'top-right' as NbGlobalPosition;
    let status :NbComponentStatus = 'top-right' as NbComponentStatus;

    this.toastrService.show(
      msg,
      title,
      { position, status });
  }

}
