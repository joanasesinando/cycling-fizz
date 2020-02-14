import {Component, OnInit} from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-cards-bikelane',
  templateUrl: './map-cards-bikelane.component.html',
  styleUrls: ['./map-cards-bikelane.component.scss']
})
export class MapCardsBikelaneComponent implements OnInit {

  type: string = "Pista unidirecional";
  typePopover: string = "Popover tipologia";
  floor: string = "Bom estado";
  floorPopover: string = "Popover piso";
  notes: string = "Excepteur culpa duis ad sit est exercitation dolore veniam id cupidatat. Sit incididunt anim occaecat amet ipsum non.";
  other_info = [
    {
      icon: "../../../../../assets/images/map/icons/map-element/segregated.svg",
      label: "Segregada",
      checked: true,
      popover: "Popover segregada",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/light.svg",
      label: "Iluminação",
      checked: true,
      popover: "Popover iluminação",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/cargo.svg",
      label: "Cargo bike friendly",
      checked: false,
      popover: "Popover cargo",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/shared.svg",
      label: "Partilhada com peões",
      checked: false,
      popover: "Popover partilhada",
    },
  ];

  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
