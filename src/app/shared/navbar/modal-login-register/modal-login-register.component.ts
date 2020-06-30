import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export enum Modals {
  Login = 1,
  Register,
  CompleteRegister
}
@Component({
  selector: 'app-modal-login-register',
  templateUrl: './modal-login-register.component.html',
  styleUrls: ['./modal-login-register.component.scss']
})
export class ModalLoginRegisterComponent implements OnInit {

  Modals = Modals;
  currentModal: Modals = Modals.Login;

  constructor() { }

  ngOnInit() {
  }

  setCurrentModal(modal: Modals) {
    this.currentModal = modal;
  }

  isCurrentModal(modal: Modals) {
    return this.currentModal == modal;
  }
}
