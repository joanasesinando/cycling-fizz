import { Component, OnInit, HostListener } from '@angular/core';

import { faGlobeEurope, faChevronDown, faTrafficLight, 
        faRoute, faQuestion, faComments, faUsers } from '@fortawesome/free-solid-svg-icons';

import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

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
  faUsers = faUsers;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;

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
