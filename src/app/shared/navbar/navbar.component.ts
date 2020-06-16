import { Component, OnInit, HostListener } from '@angular/core';
import { faGlobeEurope, faChevronDown,  faChevronUp, faTrafficLight,
        faRoute, faQuestion, faComments, faUsers } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AuthFirebaseService} from "../../_services/auth-firebase.service";

declare let $: any;


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
  navigation;
  currentActiveDropdown  = null;

  constructor(private _router: Router, public translate: TranslateService, public authFirebaseService: AuthFirebaseService) {
    this.router = _router;
    this.onWindowResize();
    this.hideMobileMenuWhenClickedOutside();

    // subscribe to router
    _router.events.subscribe(() => {
      if(_router.url === '/') {
        this.unglueFromTop(this.nav);
        this.makeBgDefault(this.nav);
        this.makeTextDark(this.nav);

      } else if(_router.url === '/map') {
        this.glueToTop(this.nav);
        this.makeBgWhite(this.nav);
        this.makeTextDark(this.nav);

      } else {
        this.glueToTop(this.nav);
        this.makeBgTintedDark(this.nav);
        this.makeTextLight(this.nav);
      }
      this.removeShadow(this.nav);
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
    this.navigation = $('.navbar-collapse');

    this.hideMobileMenuWhenLinkClicked();
  }

  changeLanguage(code) {
    this.translate.use(code);
    this.authFirebaseService.setLanguageCode(code);
  }


  showNavbar() {
    this.navbarToggler.addClass('is-active');
    this.glueToTop(this.nav);
    this.makeBgWhite(this.nav);
    this.addShadow(this.nav);
    this.makeTextDark(this.nav);
    this.navigation.slideDown();
  }

  hideNavbar() {
    this.navigation.slideUp();
    this.navbarToggler.removeClass('is-active');

    setTimeout(() => {
      if(this.router.url === '/') {
        if(this.nav.offset().top <= 100) {
          this.unglueFromTop(this.nav);
          this.makeBgDefault(this.nav);
          this.removeShadow(this.nav);
        }

      } else if(this.router.url === '/map') {
        this.makeBgWhite(this.nav);

      } else {
        if(this.nav.offset().top <= 100) {
          this.makeBgTintedDark(this.nav);
          this.makeTextLight(this.nav);
          this.removeShadow(this.nav);
        }
      }

    }, 300); //gives time for the slideUp to execute

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
      if(!this.nav.is(event.target) // The target of the click isn't the navbar
          && this.nav.has(event.target).length === 0 // Nor a child element of the navbar
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

  glueToTop(nav) { nav.addClass('navbar-top'); }
  unglueFromTop(nav) { nav.removeClass('navbar-top'); }

  makeBgWhite(nav) {
    nav.removeClass('navbar-tinted-white');
    nav.removeClass('navbar-tinted-dark');
    nav.addClass('navbar-white');
  }

  makeBgTintedWhite(nav) {
    nav.removeClass('navbar-white');
    nav.removeClass('navbar-tinted-dark');
    nav.addClass('navbar-tinted-white');
  }

  makeBgTintedDark(nav) {
    nav.removeClass('navbar-white');
    nav.removeClass('navbar-tinted-white');
    nav.addClass('navbar-tinted-dark');
  }

  makeBgDefault(nav) {
    nav.removeClass('navbar-white');
    nav.removeClass('navbar-tinted-white');
    nav.removeClass('navbar-tinted-dark');
  }

  addShadow(nav) { nav.addClass('navbar-shadow'); }
  removeShadow(nav) { nav.removeClass('navbar-shadow'); }

  makeTextLight(nav) { nav.addClass('navbar-text-light'); }
  makeTextDark(nav) { nav.removeClass('navbar-text-light'); }

  navbarChangeOnScroll(url) {
    let mainNav = $('#mainNav');

    if(mainNav.offset().top > 100) {
      this.glueToTop(mainNav);
      this.makeBgTintedWhite(mainNav);
      this.addShadow(mainNav);
      this.makeTextDark(mainNav);

    } else {
      if(url === '/') {
        this.unglueFromTop(mainNav);
        this.makeBgDefault(mainNav);
        this.removeShadow(mainNav);
        this.makeTextDark(mainNav);

      } else {
        this.glueToTop(mainNav);
        this.makeBgTintedDark(mainNav);
        this.removeShadow(mainNav);
        this.makeTextLight(mainNav);
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    /*------- Close NavBar on scroll (mobile) -------*/
    if (this.navbarToggler.hasClass('is-active')) {
      this.hideNavbar();
    }
    /*-----------------------------------------------*/
    else if(this.router.url != '/map') this.navbarChangeOnScroll(this.router.url);
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.mobileView = window.innerWidth <= 991.98;
  }

}
