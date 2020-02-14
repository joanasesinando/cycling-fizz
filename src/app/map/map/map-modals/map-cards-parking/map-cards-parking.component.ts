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
  security: number = 4.1;
  securityArray: number[] = []; //needs to be an array for *ngFor to work
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
    this.securityArray = this.createSecurityArray(this.security);
    console.log(this.securityArray);
  }

  createSecurityArray(security) {
    let array = [];
    let roundedSecurity = Math.round(security);

    for(let i = 0; i < roundedSecurity; i++) array.push(1);
    if(roundedSecurity < 5) for(let i = 0; i < 5-roundedSecurity; i++) array.push(0);
    return array;
  }

}
