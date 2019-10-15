import { Component, OnInit, HostListener } from '@angular/core';

import { faGlobeEurope, faChevronDown, faTrafficLight, 
        faRoute, faQuestion, faComments, faBlog, faCalendarAlt,
        faLightbulb, faUsers, faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //FontAwesome icons
  faGlobeEurope = faGlobeEurope;
  faChevronDown = faChevronDown;
  faTrafficLight = faTrafficLight;
  faRoute = faRoute;
  faQuestion = faQuestion;
  faComments = faComments;
  faBlog = faBlog;
  faCalendarAlt = faCalendarAlt;
  faLightbulb = faLightbulb;
  faUsers = faUsers;
  faEnvelope = faEnvelope;

  const favicon = require('./img/favicon.png');


  logoSrc =

  constructor() { }

  ngOnInit() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    // Closes responsive menu when a scroll trigger link is clicked
    // $('.js-scroll-trigger').on('click', () => {
      // $('.navbar-collapse').collapse();
    // });

    // Collapse Navbar on scroll
    function navbarCollapse() {
      let mainNav = $('#mainNav');


      if (mainNav.offset().top > 100) {
        mainNav.addClass('navbar-shrink');
        this.logoSrc = "../../../assets/images/logo.svg";
      } else {
        mainNav.removeClass('navbar-shrink');
        this.logoSrc = "../../../assets/images/logo_dark.svg";
      }
    }

    // Collapse now if page is not at top
    navbarCollapse();
  }

}
