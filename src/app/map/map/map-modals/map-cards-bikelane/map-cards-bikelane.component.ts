import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-cards-bikelane',
  templateUrl: './map-cards-bikelane.component.html',
  styleUrls: ['./map-cards-bikelane.component.scss']
})
export class MapCardsBikelaneComponent implements OnInit {

  type: string = "Pista unidirecional";
  floor: string = "Bom estado";
  notes: string = "Excepteur culpa duis ad sit est exercitation dolore veniam id cupidatat. Sit incididunt anim occaecat amet ipsum non.";
  other_info = [
    {
      icon: "../../../../../assets/images/map/icons/map-element/segregated.svg",
      label: "Segregada",
      checked: true,
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/light.svg",
      label: "Iluminação",
      checked: true,
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/cargo.svg",
      label: "Cargo bike friendly",
      checked: false,
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/shared.svg",
      label: "Partilhada com peões",
      checked: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
