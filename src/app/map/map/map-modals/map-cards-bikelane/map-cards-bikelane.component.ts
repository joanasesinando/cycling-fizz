import {Component, Input, OnInit} from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-map-cards-bikelane',
  templateUrl: './map-cards-bikelane.component.html',
  styleUrls: ['./map-cards-bikelane.component.scss']
})
export class MapCardsBikelaneComponent implements OnInit {

  @Input() editMode: boolean;

  //FIXME colocar num JSON ?
  types = [
    { type: "Pista unidirecional", id: "0" },
    { type: "Pista bidirecional", id: "1" },
    { type: "Zona 30", id: "2" },
    { type: "Trilho", id: "3" },
    { type: "Parque", id: "4" },
    { type: "Outro", id: "5" }
  ];
  floors = [
    { floor: "Direito", id: "0" },
    { floor: "Misto", id: "1" },
    { floor: "Íngreme", id: "2" },
  ];

  //FIXME ir buscar à BD
  type = this.types[0];
  typePopover: string = "Popover tipologia";
  floor = this.floors[0];
  floorPopover: string = "Popover piso";
  notes: string = "Carrega em “editar” para adicionar uma nota.";
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
