import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { faTwitter, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {

  //FontAwesome icons
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;

  SECONDS_IN_DAY = 86400;
  SECONDS_IN_HOUR = 3600;
  SECONDS_IN_MINUTE = 60;

  mobileView: boolean;
  releaseDate: string;

  // ------> ADD RELEASE DATES HERE
  releaseDates = {
    routes: "2020/05/21" //FIXME meter datas corretas
  };

  constructor(private _router: ActivatedRoute) {
    // set release date
    let page = _router.snapshot.paramMap.get("page");

    // ------> ADD RELEASE DATES HERE
    switch (page) {
      case "routes":
        this.releaseDate = this.releaseDates.routes;
        break;

      default:
        this.releaseDate = "";
        break;
    }
  }

  ngOnInit() {
    setInterval(()=> { this.updateCountdown() }, 1000);
    this.onWindowResize();
  }

  changeToMobileView() {
    if(this.mobileView) {
      $('#mainDiv').removeClass("justify-content-between");
      $('#mainDiv').addClass("mobile");
      $('#mainDiv').addClass("flex-column");

    } else {
      $('#mainDiv').addClass("justify-content-between");
      $('#mainDiv').removeClass("mobile");
      $('#mainDiv').removeClass("flex-column");
    }
  }

  updateCountdown() {
    let now = new Date();
    let countdownEnd = new Date(this.releaseDate);
    let timeLeft = (countdownEnd.getTime() - now.getTime()) / 1000; // in seconds

    let daysLeft = parseInt(String(timeLeft / this.SECONDS_IN_DAY));
    timeLeft %= this.SECONDS_IN_DAY;
    let hoursLeft = parseInt(String(timeLeft / this.SECONDS_IN_HOUR));
    timeLeft %= this.SECONDS_IN_HOUR;
    let minLeft = parseInt(String(timeLeft / this.SECONDS_IN_MINUTE));
    timeLeft %= this.SECONDS_IN_MINUTE;
    let secLeft = parseInt(String(timeLeft));

    $('#countdown-days')[0].innerText = String(daysLeft);
    $('#countdown-hours')[0].innerText = String(hoursLeft);
    $('#countdown-min')[0].innerText = String(minLeft);
    $('#countdown-seg')[0].innerText = String(secLeft);
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.mobileView = window.innerWidth <= 991.98;
    this.changeToMobileView();
  }
}
