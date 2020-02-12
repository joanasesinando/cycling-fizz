import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-cards-parking',
  templateUrl: './map-cards-parking.component.html',
  styleUrls: ['./map-cards-parking.component.scss']
})
export class MapCardsParkingComponent implements OnInit {

  type: string = "U invertido ou semelhante";
  places: number = 6;
  security: number[] = [1, 1, 1, 0, 0]; //needs to be an array for *ngFor to work
  environment: string = "Movimentado seg - sex";
  notes: string = "Excepteur culpa duis ad sit est exercitation dolore veniam id cupidatat. Sit incididunt anim occaecat amet ipsum non.";
  other_info = [
    {
      icon: "../../../../../assets/images/map/icons/map-element/covered.svg",
      label: "Coberto",
      checked: true,
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/light.svg",
      label: "Iluminação",
      checked: true,
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/supervised.svg",
      label: "Supervisão",
      checked: false,
    }
  ];

  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
