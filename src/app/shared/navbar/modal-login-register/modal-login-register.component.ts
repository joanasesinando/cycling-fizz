import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-login-register',
  templateUrl: './modal-login-register.component.html',
  styleUrls: ['./modal-login-register.component.scss']
})
export class ModalLoginRegisterComponent implements OnInit {

  showRegister: boolean = false;

  constructor() { }

  ngOnInit() {
  }


}
