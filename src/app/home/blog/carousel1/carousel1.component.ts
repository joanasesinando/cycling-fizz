import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.scss']
})

export class Carousel1Component implements OnInit {

  @Input() cardArray = [{
    photoSrc: "../../../assets/images/homepage/blog/photos/blog1.jpg",
    topic: "Ciclismo",
    date: new Date(1996, 5, 21),
    title: "Lorem ipsum dolor sit amet consectetuer",
    nrComments: 5,
    nrLikes: 21
  }];

  constructor() { }

  ngOnInit() {
  }

}
