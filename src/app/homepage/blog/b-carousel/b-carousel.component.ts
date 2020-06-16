import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-b-carousel',
  templateUrl: './b-carousel.component.html',
  styleUrls: ['./b-carousel.component.scss']
})
export class BCarouselComponent implements OnInit {

  @Input() blogPosts : {photoSrc: string, topic: string, date: Date, title: string, nrComments: number, nrLikes: number}[];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          arrows: false,
          lazyload: "ondemand"
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
