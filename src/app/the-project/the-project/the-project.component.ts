import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';

import { faTwitter, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-the-project',
  templateUrl: './the-project.component.html',
  styleUrls: ['./the-project.component.scss']
})
export class TheProjectComponent implements OnInit, AfterViewInit {

  //FontAwesome icons
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;

  mobileView: boolean = false;

  constructor() {
    this.onWindowResize();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeFading();
  }

  changeFading(){
    let textSections = $(".text-section");
    if(this.mobileView) {
      for(let i = 0; i < 3; i++) {
        textSections[i].setAttribute("data-aos", "fade-up");
      }
    } else {
      for(let i = 0; i < 3; i++) {
        if(i == 1) textSections[i].setAttribute("data-aos", "fade-right");
        else textSections[i].setAttribute("data-aos", "fade-left");
      }
    }
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.mobileView = window.innerWidth <= 991.98;
  }

}
