import {Component, Input, OnInit} from '@angular/core';
import {faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-store',
  templateUrl: './map-store.component.html',
  styleUrls: ['./map-store.component.scss']
})
export class MapStoreComponent implements OnInit {

  @Input() editMode: boolean;

  //FIXME ir buscar à BD
  address: string = "Quinta Casal de Pipa EN 250, 2670-339 Loures";
  hours: string = "Seg - Sex: 10h - 23h";
  phone: string = "21 012 6060";
  description: string = "Carrega em “editar” para adicionar uma descrição.";
  links: {type: string, link: string}[] = [
    {
      type: "website",
      link: "https://www.rocketsite.pt"
    },
    {
      type: "facebook",
      link: "https://www.rocketsite.pt"
    },
    {
      type: "instagram",
      link: "https://www.rocketsite.pt"
    },
    {
      type: "twitter",
      link: "https://www.rocketsite.pt"
    },
    {
      type: "youtube",
      link: "https://www.rocketsite.pt"
    },
  ]

  faGlobe = faGlobe;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}
