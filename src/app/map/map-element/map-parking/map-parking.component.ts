import {Component, Input, OnInit} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-parking',
  templateUrl: './map-parking.component.html',
  styleUrls: ['./map-parking.component.scss']
})
export class MapParkingComponent implements OnInit {

  @Input() editMode: boolean;

  //FIXME colocar num JSON ?
  types = [
    { label: "U invertido", id: 0 },
    { label: "De roda", id: 1 },
    { label: "Poste", id: 2 },
    { label: "Suspenso", id: 3 },
    { label: "Grade/Vedação", id: 4 },
    { label: "Outro", id: 5 }
  ];
  typeHint: string = "Popover tipologia";

  placesHint: string = "Popover lugares";
  securityHint: string = "Popover segurança";

  environments = [
    { label: "Sempre movimentado", id: 0 },
    { label: "Movimentado Seg-Sex", id: 1 },
    { label: "Movimentado Sáb-Dom", id: 2 },
    { label: "Pouco movimentado", id: 3 }
  ];
  environmentHint: string = "Popover ambiente";

  accesses = [
    { label: "Público & Fácil acesso", id: 0 },
    { label: "Público & Difícil acesso", id: 1 },
    { label: "Privado & Fácil acesso", id: 2 },
    { label: "Privado & Difícil acesso", id: 3 }
  ];
  accessHint: string = "Popover acesso";

  infos = [
    { label: "Coberto", icon: "../../../../assets/images/map/icons/map-element/covered.svg", hint: "Popover coberto" },
    { label: "Espaçoso", icon: "../../../../assets/images/map/icons/map-element/spacious.svg", hint: "Popover espaçoso" },
    { label: "Vigiado", icon: "../../../../assets/images/map/icons/map-element/supervised.svg", hint: "Popover vigiado" },
    { label: "Visível", icon: "../../../../assets/images/map/icons/map-element/visible.svg", hint: "Popover visível" },
    { label: "Iluminação", icon: "../../../../assets/images/map/icons/map-element/light.svg", hint: "Popover iluminação" },
  ];

  //FIXME ir buscar à BD
  type = this.types[0];
  places: number = 6;
  security: number = 4;
  securityArray: boolean[] = []; //needs to be an array for *ngFor to work
  environment = this.environments[0];
  access = this.accesses[0];
  info = [true, true, false, true, false];
  notes: string = "Carrega em “editar” para adicionar uma nota.";

  faStar = faStar;

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
