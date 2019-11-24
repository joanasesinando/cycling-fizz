import { Component, OnInit, HostListener } from '@angular/core';

import { faGlobeEurope, faChevronDown, faTrafficLight, 
        faRoute, faQuestion, faComments, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // FontAwesome icons
  faGlobeEurope = faGlobeEurope;
  faChevronDown = faChevronDown;
  faTrafficLight = faTrafficLight;
  faRoute = faRoute;
  faQuestion = faQuestion;
  faComments = faComments;
  faUsers = faUsers;

  mobileView: boolean = false;

  constructor() { }

  ngOnInit() {
    let navbarToggler = $('.navbar-toggler');
    let navbar = $('.navbar');
    let dropdowns = ['#navbarDropdownUtilLink', '#navbarDropdownComunidadeLink', '#navbarDropdownSobreLink'];
    let hmbgrs = ['#hmbg1', '#hmbg2', '#hmbg3'];
    let currentActiveDropdown = null;

    // Toggle mobile menu hamburger btn
    navbarToggler.on('click', () => {
      if(navbarToggler.hasClass('is-active')) { 
        navbarToggler.removeClass('is-active'); 
        navbar.removeClass('bg-white');

      } else {
        navbarToggler.addClass('is-active');
        navbar.addClass('bg-white');
      }
    });

    // Toggle dropdowns hamburger btns
    for(let i=0; i < dropdowns.length; i++){
      $(dropdowns[i]).on('click', () => {
        if($(hmbgrs[i]).hasClass('is-active')) {
          $(hmbgrs[i]).removeClass('is-active');
          currentActiveDropdown = null;
        } else {
          if(currentActiveDropdown != null){
            $(hmbgrs[currentActiveDropdown]).removeClass('is-active');
          }
          $(hmbgrs[i]).addClass('is-active');
          currentActiveDropdown = i;
        }
      });
    }

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    // Glue navbar to top on scroll
    function navbarGlue() {
      let mainNav = $('#mainNav');

      if (mainNav.offset().top > 100) mainNav.addClass('navbar-top');
      else mainNav.removeClass('navbar-top');
    }

    // Glue now if page is not at top
    navbarGlue();
  }

    @HostListener('window:resize', [])
    onWindowResize() {
      if(window.innerWidth <= 991.98) this.mobileView = true;
      else this.mobileView = false;
    }

}
