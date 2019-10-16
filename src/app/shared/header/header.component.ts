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

  ngOnInit() { 
    let navbarToggler = $('.navbar-toggler');
    let navbar = $('.navbar');

    // Toggle hamburger btn spin
    $(navbarToggler).on('click', () => {
      if(navbarToggler.hasClass('is-active')) { 
        navbarToggler.removeClass('is-active'); 
        navbar.removeClass('bg-white');

      } else {
        navbarToggler.addClass('is-active');
        navbar.addClass('bg-white');
      }
    });
    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    // Closes responsive menu when a scroll trigger link is clicked
    // $('.js-scroll-trigger').on('click', () => {
      // $('.navbar-collapse').collapse();
    // });

    // Glue navbar to top on scroll
    function navbarGlue() {
      let mainNav = $('#mainNav');

      if (mainNav.offset().top > 100) {
        mainNav.addClass('navbar-top');
      } else {
        mainNav.removeClass('navbar-top');
      }
    }

    // Glue now if page is not at top
    navbarGlue();
  }

}
