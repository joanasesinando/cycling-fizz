import {Component, Input, OnInit} from '@angular/core';
import { faStar, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-cards-parking',
  templateUrl: './map-cards-parking.component.html',
  styleUrls: ['./map-cards-parking.component.scss']
})
export class MapCardsParkingComponent implements OnInit {

  @Input() editMode: boolean;

  //FIXME colocar num JSON ?
  types = [
    { type: "U invertido", id: "0" },
    { type: "De roda", id: "1" },
    { type: "Poste", id: "2" },
    { type: "Suspenso", id: "3" },
    { type: "Grade/Vedação", id: "4" },
    { type: "Outro", id: "5" }
  ];
  environments = [
    { type: "Sempre movimentado", id: "0" },
    { type: "Movimentado Seg-Sex", id: "1" },
    { type: "Movimentado Sáb-Dom", id: "2" },
    { type: "Pouco movimentado", id: "3" }
  ];
  accesses = [
    { type: "Público & Fácil acesso", id: "0" },
    { type: "Público & Difícil acesso", id: "1" },
    { type: "Privado & Fácil acesso", id: "2" },
    { type: "Privado & Difícil acesso", id: "3" }
  ];


  type = this.types[0];
  typePopover: string = "Popover tipologia";
  places: number = 6;
  placesPopover: string = "Popover lugares";
  security: number = 4;
  securityPopover: string = "Popover segurança";
  securityArray: number[] = []; //needs to be an array for *ngFor to work
  environment = this.environments[0];
  environmentPopover: string = "Popover ambiente";
  access = this.accesses[0];
  accessPopover: string = "Popover acesso";
  notes: string = "Carrega em “editar” para adicionar uma nota.";
  other_info = [
    {
      icon: "../../../../../assets/images/map/icons/map-element/covered.svg",
      label: "Coberto",
      checked: true,
      popover: "Popover coberto",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/spacious.svg",
      label: "Espaçoso",
      checked: true,
      popover: "Popover espaçoso",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/supervised.svg",
      label: "Vigiado",
      checked: false,
      popover: "Popover vigiado",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/visible.svg",
      label: "Visível",
      checked: true,
      popover: "Popover visível",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/light.svg",
      label: "Iluminação",
      checked: true,
      popover: "Popover iluminação",
    }
  ];

  faStar = faStar;
  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
    this.securityArray = this.createSecurityArray(this.security);
  }

  createSecurityArray(security) {
    let array = [];
    let roundedSecurity = Math.round(security);

    for(let i = 0; i < roundedSecurity; i++) array.push(1);
    if(roundedSecurity < 5) for(let i = 0; i < 5-roundedSecurity; i++) array.push(0);
    return array;
  }

}
