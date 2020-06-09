import {Component, HostListener, Input, OnInit} from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-gallery',
  templateUrl: './map-gallery.component.html',
  styleUrls: ['./map-gallery.component.scss']
})
export class MapGalleryComponent implements OnInit {

  @Input() photos;

  slideConfigFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: false,
    fade: true,
    asNavFor: '#slider-nav',
    lazyLoad: 'progressive'
  };
  slideConfigNav = {
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    asNavFor: '#slider-for',
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
  };
  slideConfigMobile = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    mobileFirst: true,
    lazyLoad: 'ondemand'
  };

  faUpload = faUpload;
  mobileView: boolean = false;

  constructor() {
    this.onWindowResize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.mobileView = window.innerWidth <= 991.98;
  }

}
