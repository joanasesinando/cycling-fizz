import {Component, EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {AuthFirebaseService} from "../../../_services/auth-firebase.service";

export enum Modals {
  Login = 1,
  Register,
  CompleteRegister
}
@Component({
  selector: 'app-modal-auth-general',
  templateUrl: './modal-auth-general.component.html',
  styleUrls: ['./modal-auth-general.component.scss']
})
export class ModalAuthGeneralComponent implements OnInit {

  Modals = Modals;
  currentModal: Modals = Modals.Login;

  constructor(private authFirebaseService: AuthFirebaseService, private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  setCurrentModal(modal: Modals) {
    this.currentModal = modal;
  }

  isCurrentModal(modal: Modals) {
    return this.currentModal == modal;
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  sendEmailVerification() {
    this.authFirebaseService.sendEmailVerification()
  }
}
