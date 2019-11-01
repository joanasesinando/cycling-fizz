import { Component, OnInit } from '@angular/core';

import {faTwitter, faInstagram, faFacebookF, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  //FontAwesome icons
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit() {
  }

}
