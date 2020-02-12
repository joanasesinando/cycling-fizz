import {Component, Input, OnInit} from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-modals',
  templateUrl: './map-modals.component.html',
  styleUrls: ['./map-modals.component.scss']
})
export class MapModalsComponent implements OnInit {

  //===== Filters Modal =====//
  @Input() filters;

  // FIXME ir buscar à BD
  name: string = "Ciclovia da Avenida Fontes Pereira de Melo";
  lastUpdateDate: Date = new Date("2019/03/30");
  lastUpdateUser: string = "joanasesinando";
  type: string = "bikelane";
  images: JSON;
  comments: JSON;

  faTrash = faTrash;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
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
