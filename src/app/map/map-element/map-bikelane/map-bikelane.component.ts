import {Component, Input, OnInit} from '@angular/core';
import bikelanesInfo from 'assets/map/map-element/bikelanes.json';

@Component({
  selector: 'app-map-bikelane',
  templateUrl: './map-bikelane.component.html',
  styleUrls: ['./map-bikelane.component.scss']
})
export class MapBikelaneComponent implements OnInit {

  @Input() editMode: boolean;

  types: { label: string, id: number }[] = bikelanesInfo.types;
  steeps: { label: string, id: number }[] = bikelanesInfo.steeps;
  floors: { label: string, id: number }[] = bikelanesInfo.floors;
  infos: { label: string, id: number }[] = bikelanesInfo.infos;

  typeHint: string = bikelanesInfo.typeHint;
  steepHint: string = bikelanesInfo.steepHint;
  floorHint: string = bikelanesInfo.floorHint;

  //FIXME: ir buscar à BD
  type: { label: string, id: number } = bikelanesInfo.types[0];
  steep: { label: string, id: number } = bikelanesInfo.steeps[0];
  floor: { label: string, id: number } = bikelanesInfo.floors[0];
  info: boolean[] = [true, true, false, false];
  notes: string = "Carrega em “editar” para adicionar uma nota.";

  constructor() { }

  ngOnInit(): void {
  }

}
