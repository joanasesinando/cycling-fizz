import {Component, HostListener, OnInit} from '@angular/core';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-the-project',
  templateUrl: './the-project.component.html',
  styleUrls: ['./the-project.component.scss']
})
export class TheProjectComponent implements OnInit {

  //FontAwesome icons
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faPaperPlane = faPaperPlane;

  mobileView: boolean = false;

  //flag so the function doesn't run on construction bc it wouldn't be able to find #features-container
  doChangeFading:  boolean = false;

  constructor() {
    this.onWindowResize();
    this.doChangeFading = true;
  }

  ngOnInit() {
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
    if(this.doChangeFading) this.changeFading();
  }

}
