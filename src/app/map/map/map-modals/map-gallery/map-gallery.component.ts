import {Component, HostListener, Input, OnInit} from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-gallery',
  templateUrl: './map-gallery.component.html',
  styleUrls: ['./map-gallery.component.scss']
})
export class MapGalleryComponent implements OnInit {

  @Input() photos;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: false,
    fade: true,
    asNavFor: '#slider-nav',
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          mobileFirst: true,
          slidesToShow: 1,
          arrows: false,
          asNavFor: null,
          lazyload: "ondemand",
        }
      }
    ]
  };
  slideConfigNav = {
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    asNavFor: '#slider',
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          asNavFor: null,
        }
      }
    ]
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
