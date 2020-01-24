import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

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

  @Output() onSignInClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  signInClicked() {
    this.onSignInClicked.emit();
  }

}
