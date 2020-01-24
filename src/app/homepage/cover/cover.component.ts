import { Component, OnInit } from '@angular/core';

import {faTwitter, faInstagram, faFacebookF, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  //FontAwesome icons
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit() {
  }

  smoothScroll(event){
    event.preventDefault();

    document.querySelector(event.currentTarget.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  };

}
