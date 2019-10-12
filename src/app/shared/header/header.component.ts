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
      if ($('#mainNav').offset().top > 100) {
        $('#mainNav').addClass('navbar-shrink');
      } else {
        $('#mainNav').removeClass('navbar-shrink');
      }
    }

    // Collapse now if page is not at top
    navbarCollapse();
  }

}
