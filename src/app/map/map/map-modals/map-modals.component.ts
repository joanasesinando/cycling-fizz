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
  lastUpdateUser: string = "joanasesinando";
  type: string = "store";
  images: JSON;
  comments: JSON;

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
