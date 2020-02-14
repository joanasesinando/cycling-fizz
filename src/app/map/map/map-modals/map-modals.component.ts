import {Component, Input, OnInit} from '@angular/core';
import { faTrash, faEdit, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-modals',
  templateUrl: './map-modals.component.html',
  styleUrls: ['./map-modals.component.scss']
})
export class MapModalsComponent implements OnInit {

  //===== Filters Modal =====//
  @Input() filters;

  //===== Map element Modal =====//
  // FIXME ir buscar à BD
  name: string = "Decathlon";
  storeRating: number[] = [1, 1, 1, 0, 0]; //needs to be an array for *ngFor to work
  storeRatingNumber: number = 3.1;
  storeRatingSource: string = "Google";
  lastUpdateDate: Date = new Date("2019/03/30");
  lastUpdateUser: string = "Cycling Fizz Team";
  type: string = "store";
  tags = [
    {
      text: "seguro",
      color: "orange"
    },
    {
      text: "precisa reparações",
      color: "purple"
    },
    {
      text: "perigoso",
      color: "green"
    },
    {
      text: "kids friendly",
      color: "red"
    },
    {
      text: "bom design",
      color: "darkBlue"
    },
    {
      text: "muito usado",
      color: "blue"
    },
    {
      text: "local remoto",
      color: "yellow"
    },
    {
      text: "mau design",
      color: "pink"
    },
  ];
  photos = [
    {
      img: "../../../../../assets/images/map/gallery/img1.jpg",
      user: "username1",
      avatar: "../../../../../assets/images/map/avatars/avatar1.jpg"
    },
    {
      img: "../../../../../assets/images/map/gallery/img2.jpg",
      user: "username2",
      avatar: "../../../../../assets/images/map/avatars/avatar2.jpg"
    },
    {
      img: "../../../../../assets/images/map/gallery/img4.jpg",
      user: "username3",
      avatar: "../../../../../assets/images/map/avatars/avatar3.jpg"
    },
    {
      img: "../../../../../assets/images/map/gallery/img5.jpg",
      user: "username4",
      avatar: "../../../../../assets/images/map/avatars/avatar4.jpg"
    },
    {
      img: "../../../../../assets/images/map/gallery/img6.jpg",
      user: "username5",
      avatar: "../../../../../assets/images/map/avatars/avatar5.jpg"
    },
    {
      img: "../../../../../assets/images/map/gallery/img7.jpg",
      user: "username6",
      avatar: "../../../../../assets/images/map/avatars/avatar6.jpg"
    },
    {
      img: "../../../../../assets/images/map/gallery/img9.jpg",
      user: "username7",
      avatar: "../../../../../assets/images/map/avatars/avatar7.jpg"
    },
    {
      img: "../../../../../assets/images/map/gallery/img10.jpg",
      user: "username8",
      avatar: "../../../../../assets/images/map/avatars/avatar8.jpg"
    },
  ];
  comments = [
    {
      type: "text",
      text: "Et id magna amet nostrud quis nulla irure ad et laborum.",
      reply: false,
      user: {
        name: "Ralph Alexander",
        avatar: "../../../../../assets/images/map/avatars/avatar1.jpg"
      },
      date: new Date()
    },
    {
      type: "text",
      text: "Ipsum esse culpa ea non cupidatat nisi dolor occaecat laboris culpa aute deserunt in.",
      reply: false,
      user: {
        name: "Tyrone Fox",
        avatar: "../../../../../assets/images/map/avatars/avatar2.jpg"
      },
      date: new Date()
    },
    {
      type: "text",
      text: "Exercitation laboris dolore aliqua irure do enim adipisicing eiusmod id officia ad quis culpa. Ex ipsum ad mollit quis aute " +
          "sunt cupidatat. Eiusmod elit sit cupidatat dolore mollit. Aliquip voluptate in ad officia nostrud proident.",
      reply: false,
      user: {
        name: "Victoria Bell",
        avatar: "../../../../../assets/images/map/avatars/avatar3.jpg"
      },
      date: new Date(1996, 5, 21, 12, 44, 20)
    }
  ];

  faTrash = faTrash;
  faEdit = faEdit;
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
    $(function () {
      // @ts-ignore
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  toggleFilterGroups(category) {

    let quickFilterSwitch = $( ".filter-" + category.toLowerCase() + " .toggle" );
    let filterGroup = $(".filter-group-" + category.toLowerCase());

    // trigger a click on the corresponding switch
    quickFilterSwitch.trigger( "click" );

    // show/hide filter groups based on switch toggled
    if(filterGroup.css('display') == 'block' || filterGroup.css('display') == 'inline') filterGroup.hide();
    else if(filterGroup.css('display') == 'none') filterGroup.show();
  }

}
