import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {

  cardArray = [ //FIXME max 44 caract. + ...; check if small enough, otherwise truncate
      {
        photoSrc: "../../../assets/images/demo/photos/blog1.jpg",
        topic: "Ciclismo",
        date: new Date(1996, 5-1, 21),
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum",
        nrComments: 5,
        nrLikes: 21
      },
      {
        photoSrc: "../../../assets/images/demo/photos/blog2.jpg",
        topic: "Mobilidade",
        date: new Date(1997, 12-1, 27),
        title: "Curabitur interdum posuere mattis. Integer vehicula",
        nrComments: 12,
        nrLikes: 27
      },
      {
        photoSrc: "../../../assets/images/demo/photos/blog3.jpg",
        topic: "Vida urbana",
        date: new Date(1996, 2-1, 11),
        title: "Donec congue ex et nibh tincidunt sollicitudin. Cras quis euismod urna. Praesent",
        nrComments: 3,
        nrLikes: 11
      },
      {
        photoSrc: "../../../assets/images/demo/photos/blog4.jpg",
        topic: "Mobilidade",
        date: new Date(1996, 4-1, 15),
        title: "Nullam sed interdum ex. Curabitur lectus nibh, suscipit porttitor quam",
        nrComments: 34,
        nrLikes: 12
      },
      {
        photoSrc: "../../../assets/images/demo/photos/blog5.jpg",
        topic: "Vida urbana",
        date: new Date(1996, 3-1, 20),
        title: "Sed vel sem at arcu blandit suscipit sit amet et massa. Pellentesque",
        nrComments: 3,
        nrLikes: 100
      },
      {
        photoSrc: "../../../assets/images/demo/photos/blog6.jpg",
        topic: "Ciclismo",
        date: new Date(1996, 3-1, 11),
        title: "Duis nec tellus suscipit, blandit ligula ut, hendrerit purus",
        nrComments: 3,
        nrLikes: 11
      },
      {
        photoSrc: "../../../assets/images/demo/photos/blog7.jpg",
        topic: "Vida urbana",
        date: new Date(1996, 3-1, 11),
        title: "Phasellus pretium gravida felis et fringilla. Suspendisse potenti",
        nrComments: 3,
        nrLikes: 11
      },
      {
        photoSrc: "../../../assets/images/demo/photos/blog8.jpg",
        topic: "Mobilidade",
        date: new Date(1996, 3-1, 11),
        title: "Etiam nec massa sit amet eros auctor porta commodo at ex. Proin eget",
        nrComments: 3,
        nrLikes: 11
      },
      {
        photoSrc: "../../../assets/images/demo/photos/blog9.jpg",
        topic: "Ciclismo",
        date: new Date(1996, 3-1, 11),
        title: "Vivamus erat mauris, ultricies non lectus",
        nrComments: 3,
        nrLikes: 200
      },
  ]; //FIXME ir buscar à BD

  constructor() { }

  ngOnInit() {
      this.truncateTitle(this.cardArray);
  }

  ngAfterViewInit() {
      feather.replace();
  }

  truncateTitle(array) {
      for(let i = 0; i < array.length ; i++) {
          let length = array[i].title.length;
          array[i].title = array[i].title.substring(0, 55);
          if(length > 55) array[i].title += "...";
      }
  }

}
