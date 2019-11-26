import { Component, OnInit, HostListener } from '@angular/core';

import { faGlobeEurope, faChevronDown, faTrafficLight, 
        faRoute, faQuestion, faComments, faUsers } from '@fortawesome/free-solid-svg-icons';
import {element} from 'protractor';

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

  navbarToggler;
  navbar;
  navigation;
  dropdowns;
  hmbgrs;
  currentActiveDropdown;

  constructor() {
    this.onWindowResize();
    this.hideMobileMenuWhenClickedOutside();
  }

  ngOnInit() {
    this.navbarToggler = $('.navbar-toggler');
    this.navbar = $('.navbar');
    this.navigation = $('.navbar-collapse');

    this.dropdowns = [$('#navbarDropdownUtilLink'), $('#navbarDropdownComunidadeLink'), $('#navbarDropdownSobreLink')];
    this.hmbgrs = [$('#hmbg1'), $('#hmbg2'), $('#hmbg3')];
    this.currentActiveDropdown = null;

    // Create event listeners for hamburger btns
    for(let i = 0; i < this.dropdowns.length; i++) {
      this.dropdowns[i].on('click', () => this.toggleMobileDropdownHamburgerBtn(this.hmbgrs[i]));
    }

    this.hideMobileMenuWhenLinkClicked();
  }

  showNavbar() {
    this.navbarToggler.addClass('is-active');
    this.navbar.addClass('bg-white');
    this.navigation.slideDown();
  }

  hideNavbar() {
    this.navbarToggler.removeClass('is-active');
    this.navbar.removeClass('bg-white');
    this.navigation.slideUp();

    //reset aos hamburger btns
    this.hmbgrs.forEach(element => element.removeClass('is-active'));
  }

  toggleMobileMenu() {
    if(this.navbarToggler.hasClass('is-active')) this.hideNavbar();
    else this.showNavbar();
  };

  hideMobileMenuWhenClickedOutside() {
    $("html").on('click', (event) => {
      if(!this.navbar.is(event.target) // The target of the click isn't the navbar
          && this.navbar.has(event.target).length === 0 // Nor a child element of the navbar
          && this.navbarToggler.hasClass('is-active')) { // And the navbar is active

        this.hideNavbar();
      }
    });
  }

  hideMobileMenuWhenLinkClicked() {
    $('.clickable-nav-link').on('click', () => {
      if(this.navbarToggler.hasClass('is-active')) this.hideNavbar();
    });
  }

  toggleMobileDropdownHamburgerBtn(btn) {
    if(btn.hasClass('is-active')) {
      btn.removeClass('is-active');
      this.currentActiveDropdown = null;

    } else {
      if(this.currentActiveDropdown != null){
        this.currentActiveDropdown.removeClass('is-active');
      }
      btn.addClass('is-active');
      this.currentActiveDropdown = btn;
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
    this.mobileView = window.innerWidth <= 991.98;
  }

}
