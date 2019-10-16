import {Component, HostListener, OnInit} from '@angular/core';

import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //FontAwesome icons
  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;

  subEmailInput;
  subscribeBtn;
  emailHelp;




  constructor() { }


  changeSubBtnSize() {


    this.subscribeBtn.style.bottom = this.emailHelp.offsetHeight + this.subEmailInput.offsetHeight + "px";
  }




  ngOnInit() {
    this.subEmailInput = document.getElementById('subEmailInput') as HTMLElement;
    this.subscribeBtn = document.getElementById('subscribeBtn') as HTMLElement;
    this.emailHelp = document.getElementById('emailHelp') as HTMLElement;

    this.changeSubBtnSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.changeSubBtnSize();
  }

}
