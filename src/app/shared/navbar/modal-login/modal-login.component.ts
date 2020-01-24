import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

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

  @Output() onRegisterClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  registerClicked() {
    this.onRegisterClicked.emit();
  }

}
