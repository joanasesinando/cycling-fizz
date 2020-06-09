import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import * as eva from 'eva-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  //FontAwesome icons
  faPaperPlane = faPaperPlane;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    eva.replace();
  }

}
