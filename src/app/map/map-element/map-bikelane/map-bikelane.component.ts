import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-cards-bikelane',
  templateUrl: './map-bikelane.component.html',
  styleUrls: ['./map-bikelane.component.scss']
})
export class MapBikelaneComponent implements OnInit {

  @Input() editMode: boolean;

  //FIXME colocar num JSON ?
  types = [
    { label: "Pista unidirecional", id: 0 },
    { label: "Pista bidirecional", id: 1 },
    { label: "Zona 30", id: 2 },
    { label: "Trilho", id: 3 },
    { label: "Parque", id: 4 },
    { label: "Outro", id: 5 }
  ];
  typeHint: string = "Popover tipologia";

  steeps = [
    { label: "Plano", id: 0 },
    { label: "Misto", id: 1 },
    { label: "Íngreme", id: 2 },
  ];
  steepHint: string = "Popover inclinação";

  floors = [
    { label: "Asfalto colorido", id: 0 },
    { label: "Alcatrão", id: 1 },
    { label: "Calçada", id: 2 },
    { label: "Terra batida", id: 3 },
    { label: "Gravilha", id: 4 },
    { label: "Areia", id: 5 },
    { label: "Outro", id: 6 },
  ];
  floorHint: string = "Popover piso";

  infos = [
    { label: "Segregada", icon: "../../../../assets/images/map/icons/map-element/segregated.svg", hint: "Popover segregada" },
    { label: "Iluminação", icon: "../../../../assets/images/map/icons/map-element/light.svg", hint: "Popover iluminação" },
    { label: "Cargo bike friendly", icon: "../../../../assets/images/map/icons/map-element/cargo.svg", hint: "Popover cargo" },
    { label: "Partilhada com peões", icon: "../../../../assets/images/map/icons/map-element/shared.svg", hint: "Popover partilhada" },
  ]

  //FIXME ir buscar à BD
  type = this.types[0];
  steep = this.steeps[0];
  floor = this.floors[0];
  info = [true, true, false, false];
  notes: string = "Carrega em “editar” para adicionar uma nota.";

  constructor() { }

  ngOnInit(): void {
  }

}
