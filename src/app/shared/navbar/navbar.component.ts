import { Component, OnInit, HostListener } from '@angular/core';
import { faGlobeEurope, faChevronDown,  faChevronUp, faTrafficLight,
        faRoute, faQuestion, faComments, faUsers } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AuthFirebaseService} from "../../_services/auth-firebase.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // FontAwesome icons
  faGlobeEurope = faGlobeEurope;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faTrafficLight = faTrafficLight;
  faRoute = faRoute;
  faQuestion = faQuestion;
  faComments = faComments;
  faUsers = faUsers;

  router;
  mobileView: boolean = false;
  dropdownsOpen: boolean[] = [false, false, false];

  nav;
  navbarToggler;
  navbar;
  navigation;
  currentActiveDropdown  = null;

  constructor(private _router: Router, public translate: TranslateService, public authFirebaseService: AuthFirebaseService) {
    this.router = _router;
    this.onWindowResize();
    this.hideMobileMenuWhenClickedOutside();

    // subscribe to router
    _router.events.subscribe(() => {
      if(_router.url === '/map') {
        this.nav.addClass("navbar-top");
        this.nav.addClass("navbar-white");
      }
      else if (this.nav.hasClass("navbar-top")) {
        this.nav.removeClass("navbar-top");
        this.nav.removeClass("navbar-white");
      }
      if (_router.url != '/' && _router.url != '/map') this.nav.addClass("light");
      else this.nav.removeClass("light");

    });

    // translation
    translate.addLangs(['pt', 'en', 'fr']);
    translate.setDefaultLang('pt');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pt|en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.nav = $('#mainNav');
    this.navbarToggler = $('.navbar-toggler');
    this.navbar = $('.navbar');
    this.navigation = $('.navbar-collapse');

    this.hideMobileMenuWhenLinkClicked();
  }


  showNavbar() {
    this.navbarToggler.addClass('is-active');
    this.navbar.addClass('bg-white');
    this.navigation.slideDown();
  }

  hideNavbar() {
    this.navigation.slideUp();
    this.navbarToggler.removeClass('is-active');
    setTimeout(() => this.navbar.removeClass('bg-white'), 300); //gives time for the slideUp to execute

    //reset arrows
    for(let i in this.dropdownsOpen) this.dropdownsOpen[i] = false;
  }

  toggleMobileMenu() {
    this.navbarToggler.hasClass('is-active') ? this.hideNavbar() : this.showNavbar();
  };

  toggleDropdownMenu(i) {
    if(this.currentActiveDropdown === null){
      this.dropdownsOpen[i] = true;
      this.currentActiveDropdown = i;

    } else if(this.currentActiveDropdown === i) {
      this.dropdownsOpen[i] = false;
      this.currentActiveDropdown = null;

    } else {
      this.dropdownsOpen[this.currentActiveDropdown] = false;
      this.dropdownsOpen[i] = true;
      this.currentActiveDropdown = i;
    }
  }

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

  @HostListener('window:scroll', [])
  onWindowScroll() {

    // Glue navbar to top on scroll
    function navbarGlue(router) {
      let mainNav = $('#mainNav');

      if (mainNav.offset().top > 100) {
        mainNav.addClass('navbar-top');
        mainNav.removeClass('light');
      }
      else {
        mainNav.removeClass('navbar-top');
        if(router != '/' && router != '/map') mainNav.addClass('light');
      }
    }

    // Glue now if page is not at top & is not map
    if(this.router.url != '/map') navbarGlue(this.router.url);
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.mobileView = window.innerWidth <= 991.98;
  }

}
