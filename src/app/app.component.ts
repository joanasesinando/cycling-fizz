import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery'; //don't delete... believe me
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'cycling-fizz';

  constructor(public _router: Router){
  }

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      //disable: 'phone', #FIXME not really working, don't know why
    });
  }

  // Scroll to top after routing
  onActivate(event) {
    window.scroll(0,0);
  }
}
