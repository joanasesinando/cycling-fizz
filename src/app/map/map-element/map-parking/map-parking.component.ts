import {Component, Input, OnInit} from '@angular/core';
import parkingInfo from 'assets/map/map-element/parking.json';

@Component({
  selector: 'app-map-parking',
  templateUrl: './map-parking.component.html',
  styleUrls: ['./map-parking.component.scss']
})
export class MapParkingComponent implements OnInit {

  @Input() editMode: boolean;

  types: { label: string, id: number }[] = parkingInfo.types;
  environments: { label: string, id: number }[] = parkingInfo.environments;
  accesses: { label: string, id: number }[] = parkingInfo.accesses;
  infos: { label: string, id: number }[] = parkingInfo.infos;

  typeHint: string = parkingInfo.typeHint;
  placesHint: string = parkingInfo.placesHint;
  securityHint: string = parkingInfo.securityHint;
  environmentHint: string = parkingInfo.environmentHint;
  accessHint: string = parkingInfo.accessHint;

  securityArray: boolean[] = []; //needs to be an array for *ngFor to work

  //FIXME ir buscar à BD
  type = this.types[0];
  places: number = 6;
  security: number = 4;
  environment = this.environments[0];
  access = this.accesses[0];
  info = [true, true, false, true, false];
  notes: string = "Carrega em “editar” para adicionar uma nota.";

  constructor() { }

  ngOnInit(): void {
    this.securityArray = this.createSecurityArray(this.security);
  }

  createSecurityArray(security) {
    let array = [];
    let roundedSecurity = Math.round(security);

    for(let i = 0; i < roundedSecurity; i++) array.push(true);
    if(roundedSecurity < 5) for(let i = 0; i < 5-roundedSecurity; i++) array.push(false);
    return array;
  }

}
