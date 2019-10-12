import { Component, OnInit } from '@angular/core';

import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faInstagram, faFacebookF, faYoutube} from '@fortawesome/free-brands-svg-icons';

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

  constructor() { }

  ngOnInit() {
  }

}
