import {AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import * as eva from 'eva-icons';
import {NbDialogService, NbSidebarService} from '@nebular/theme';
import filtersInfo from 'assets/map/map-element/filters.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit, AfterViewInit {

    @ViewChild('mapElementDialog') mapElementDialog: TemplateRef<any>;

    filters: {category: string, initChecked: boolean, name: string, filterGroups: {category: string, options: string[]}[]}[] = filtersInfo.filters;

    // General
    type: string = "";
    name: string = "Name not found";
    lat: number = null;
    lng: number = null;
    lastUpdated: {date: Date, by: string} = {date: null, by: ""};
    address: string = "Address not found";
    photos: {img: string, user: {name: string, avatar: string}}[] = [];
    comments: {text: string, user: {name: string, avatar: string}, date: Date}[] = [];

    // Bikelanes
    bklType?: string = "Type not found";
    bklSteep?: string = "Steep not found";
    bklFloor?: string = "Floor not found";
    bklNotes?: string = "";
    bklInfo?: {icon: string, label: string, checked: boolean}[] = [];

    // Parking
    prkType?: string = "Type not found";
    prkPlaces?: string = "Number of places not found";
    prkSecurity?: number = null;
    prkEnvironment?: string = "Environment not found";
    prkAccess?: string = "Access not found";
    prkNotes?: string = "";
    prkInfo?: {icon: string, label: string, checked: boolean}[] = [];

    // Stores
    strRating?: number = null;
    strRatingSource?: string = "Source not found";
    strAddress?: string = "Address not found";
    strHours?: string = "Working hours not found";
    strPhone?: string = "Phone number not found";
    strDescription?: string = "";
    strLinks?: {type: string, link: string}[] = [];


  constructor(private sidebarService: NbSidebarService, private dialogService: NbDialogService) {
      // FIXME: retirar isto após ligação ao server done
      this.type = "bkl";
      this.name = "Avenida Fontes Pereira de Melo";
      this.lat = 38.7353927;
      this.lng = -9.1388712;
      this.lastUpdated.date = new Date("2019/03/30");
      this.lastUpdated.by = "Cycling Fizz Team";
      this.address = "Rua 25 de Abril, Nº29, Loures, Lisboa";
      this.photos = [
          {
              img: "../../../../../assets/images/map/gallery/img1.jpg",
              user: {
                  name: "username1",
                  avatar: "../../../../../assets/images/map/avatars/avatar1.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img2.jpg",
              user: {
                  name: "username2",
                  avatar: "../../../../../assets/images/map/avatars/avatar2.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img3.jpg",
              user: {
                  name: "username3",
                  avatar: "../../../../../assets/images/map/avatars/avatar3.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img4.jpg",
              user: {
                  name: "username4",
                  avatar: "../../../../../assets/images/map/avatars/avatar4.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img5.jpg",
              user: {
                  name: "username5",
                  avatar: "../../../../../assets/images/map/avatars/avatar5.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img6.jpg",
              user: {
                  name: "username6",
                  avatar: "../../../../../assets/images/map/avatars/avatar6.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img7.jpg",
              user: {
                  name: "username7",
                  avatar: "../../../../../assets/images/map/avatars/avatar7.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img8.jpg",
              user: {
                  name: "username8",
                  avatar: "../../../../../assets/images/map/avatars/avatar8.jpg"
              }
          },
      ];
      this.comments = [
          {
              text: "Et id magna amet nostrud quis nulla irure ad et laborum.",
              user: {
                  name: "username1",
                  avatar: "../../../../../assets/images/map/avatars/avatar1.jpg"
              },
              date: new Date()
          },
          {
              text: "Ipsum esse culpa ea non cupidatat nisi dolor occaecat laboris culpa aute deserunt in.",
              user: {
                  name: "username4",
                  avatar: "../../../../../assets/images/map/avatars/avatar4.jpg"
              },
              date: new Date()
          },
          {
              text: "Exercitation laboris dolore aliqua irure do enim adipisicing eiusmod id officia ad quis culpa. Ex ipsum ad mollit quis aute " +
                  "sunt cupidatat. Eiusmod elit sit cupidatat dolore mollit. Aliquip voluptate in ad officia nostrud proident.",
              user: {
                  name: "username8",
                  avatar: "../../../../../assets/images/map/avatars/avatar8.jpg"
              },
              date: new Date(1996, 5, 21, 12, 44, 20)
          }
      ];
  }

  ngOnInit() { }

    ngAfterViewInit() {
      eva.replace();
    }

    updateFilter(category) {
      let quickFilterSwitch = $( ".filter-" + category.toLowerCase() + " .toggle" );
      quickFilterSwitch.trigger( "click" );
    }

    toggleSidebar() {
      this.sidebarService.toggle(false, 'left');
    }

    open(dialog: TemplateRef<any>) {
      this.dialogService.open(dialog);
    }

    openBikelaneDialog(info) {
      // General
      this.type = "bkl";
      this.name = info.name;
      this.lat = null;
      this.lng = null;
      this.lastUpdated = {date: null, by: ""};
      this.address = info.address;
      this.photos = [];
      this.comments = [];

      // Bikelanes
      this.bklType  = "Type not found";
      this.bklSteep = "Steep not found";
      this.bklFloor = "Floor not found";
      this.bklNotes = "";
      this.bklInfo = [];

      this.open(this.mapElementDialog);
    }
}
