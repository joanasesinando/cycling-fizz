import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-cards-store',
  templateUrl: './map-cards-store.component.html',
  styleUrls: ['./map-cards-store.component.scss']
})
export class MapCardsStoreComponent implements OnInit {

  @Input() editMode: boolean;

  address: string = "Quinta Casal de Pipa EN 250, 2670-339 Loures";
  hours: string = "Seg - Sex: 10h - 23h";
  phone: string = "21 012 6060";
  description: string = "Carrega em “editar” para adicionar uma descrição.";
  social_media_types = ["website", "facebook", "instagram", "twitter", "youtube"];
  social_media = {
    website: {
      icon: "../../../../../assets/images/map/icons/map-element/website.svg",
      link: "https://www.rocketsite.pt",
    },
    facebook: {
      icon: "../../../../../assets/images/map/icons/map-element/facebook.svg",
      link: "https://www.rocketsite.pt",
    },
    instagram: {
      icon: "../../../../../assets/images/map/icons/map-element/instagram.svg",
      link: "https://www.rocketsite.pt",
    },
    twitter: {
      icon: "../../../../../assets/images/map/icons/map-element/twitter.svg",
      link: "https://www.rocketsite.pt",
    },
    youtube: {
      icon: "../../../../../assets/images/map/icons/map-element/youtube.svg",
      link: "https://www.rocketsite.pt",
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
