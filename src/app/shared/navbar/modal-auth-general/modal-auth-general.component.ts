import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
