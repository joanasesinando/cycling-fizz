import { Component, OnInit } from '@angular/core';
import { faStar, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-cards-parking',
  templateUrl: './map-cards-parking.component.html',
  styleUrls: ['./map-cards-parking.component.scss']
})
export class MapCardsParkingComponent implements OnInit {

  type: string = "U invertido ou semelhante";
  typePopover: string = "Popover tipologia";
  places: number = 6;
  placesPopover: string = "Popover lugares";
  security: number = 4.1;
  securityPopover: string = "Popover segurança";
  securityArray: number[] = []; //needs to be an array for *ngFor to work
  environment: string = "Movimentado seg - sex";
  environmentPopover: string = "Popover ambiente";
  notes: string = "Excepteur culpa duis ad sit est exercitation dolore veniam id cupidatat. Sit incididunt anim occaecat amet ipsum non.";
  other_info = [
    {
      icon: "../../../../../assets/images/map/icons/map-element/covered.svg",
      label: "Coberto",
      checked: true,
      popover: "Popover coberto",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/light.svg",
      label: "Iluminação",
      checked: true,
      popover: "Popover iluminação",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/supervised.svg",
      label: "Supervisão",
      checked: false,
      popover: "Popover supervisão",
    }
  ];

  faStar = faStar;
  faInfoCircle = faInfoCircle;

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
