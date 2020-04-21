import {Component, Input, OnInit, Output} from '@angular/core';
import { faTrash, faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-map-modals',
  templateUrl: './map-modals.component.html',
  styleUrls: ['./map-modals.component.scss']
})
export class MapModalsComponent implements OnInit {

  //===== Filters Modal =====//
  @Input() filters;

  //===== Map element Modal =====//
  editActivated: boolean = false;
  deleteActivated: boolean = false;

  // NOTE: get from DB
  type: string = "bikelane"; //options for debug: bikelane, parking, store
  name: string = "Decathlon";
  address: string = "Rua 25 de Abril, Nº29, Loures, Lisboa";
  lat: number = 38.7353927;
  lng: number = -9.1388712;
  storeRating: number = 3.1;
  storeRatingArray: number[] = []; //needs to be an array for *ngFor to work
  storeRatingSource: string = "Google";
  lastUpdateDate: Date = new Date("2019/03/30");
  lastUpdateUser: string = "Cycling Fizz Team";
  tags = [
    { text: "seguro", color: "orange", id: "0" },
    { text: "precisa reparações", color: "purple", id: "1" },
    { text: "perigoso", color: "green", id: "2" },
    { text: "kids friendly", color: "red", id: "3" },
    { text: "bom design", color: "darkBlue", id: "4" },
    { text: "muito usado", color: "blue", id: "5" },
    { text: "local remoto", color: "yellow", id: "6" },
    { text: "mau design", color: "pink", id: "7" },
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


  //===== Delete Modal =====//
  deleteFormMode: boolean = false;

  faTrash = faTrash;
  faEdit = faEdit;
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
    $(function () {
      // @ts-ignore
      $('[data-toggle="tooltip"]').tooltip()
    });

    // set modal close event
    $('#mapElementModal').on('hidden.bs.modal', () => {
      this.changeEditMode(false);
    });
    $('#deleteModal').on('hidden.bs.modal', () => {
      this.changeDeleteMode(false);
    });

    this.storeRatingArray = this.createStoreRatingArray(this.storeRating);
  }

  createStoreRatingArray(storeRating) {
    let array = [];
    let roundedRating = Math.round(storeRating);

    for(let i = 0; i < roundedRating; i++) array.push(1);
    if(roundedRating < 5) for(let i = 0; i < 5-roundedRating; i++) array.push(0);
    return array;
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

  changeEditMode(mode) {
    this.editActivated = mode;
  }

  changeDeleteMode(mode) {
    this.deleteFormMode = mode;
  }

  openModal(modal) {
    $(modal).modal('show');
  }

  closeModal(modal) {
    $(modal).modal('hide');
  }

  saveChanges() {
  }

  ignoreChanges() {
  }

  // [Nebular Bug]: fixes by changing checkbox color manually
  changeColor(e) {
    let option = e.target;
    let checkbox = option.firstElementChild;

    checkbox.classList.remove("status-basic");
    checkbox.classList.add("status-success");
  }

}
