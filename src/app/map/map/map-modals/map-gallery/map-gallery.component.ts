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
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '#slider-nav',
  };
  slideConfigNav = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '#slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  slideConfigMobile = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
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
