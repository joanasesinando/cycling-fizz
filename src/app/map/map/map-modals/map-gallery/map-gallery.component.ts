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
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2500,
  };
  slideConfigMobile = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2500,
    mobileFirst: true
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
