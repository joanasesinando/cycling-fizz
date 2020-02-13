import {Component, HostListener, OnInit} from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-gallery',
  templateUrl: './map-gallery.component.html',
  styleUrls: ['./map-gallery.component.scss']
})
export class MapGalleryComponent implements OnInit {

  slides = [
    { img: "../../../../../assets/images/map/gallery/img1.jpg" },
    { img: "../../../../../assets/images/map/gallery/img2.jpg" },
    { img: "../../../../../assets/images/map/gallery/img4.jpg" },
    { img: "../../../../../assets/images/map/gallery/img5.jpg" },
    { img: "../../../../../assets/images/map/gallery/img6.jpg" },
    { img: "../../../../../assets/images/map/gallery/img7.jpg" },
    { img: "../../../../../assets/images/map/gallery/img9.jpg" },
    { img: "../../../../../assets/images/map/gallery/img10.jpg" },
  ];

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
