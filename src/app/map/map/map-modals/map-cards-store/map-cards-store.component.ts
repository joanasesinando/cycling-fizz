import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-cards-store',
  templateUrl: './map-cards-store.component.html',
  styleUrls: ['./map-cards-store.component.scss']
})
export class MapCardsStoreComponent implements OnInit {

  address: string = "Quinta Casal de Pipa EN 250, 2670-339 Loures";
  hours: string = "Seg - Sex: 10h - 23h";
  phone: string = "21 012 6060";
  description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis faucibus dolor cursus nisl aliquam, magna nibh " +
      "morbi nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis faucibus dolor cursus nisl aliquam, magna nibh " +
      "morbi nunc.";
  social_media = [
    {
      icon: "../../../../../assets/images/map/icons/map-element/website.svg",
      link: "https://www.rocketsite.pt",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/facebook.svg",
      link: "https://www.rocketsite.pt",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/instagram.svg",
      link: "https://www.rocketsite.pt",
    },
    {
      icon: "../../../../../assets/images/map/icons/map-element/twitter.svg",
      link: "https://www.rocketsite.pt",
    },{
      icon: "../../../../../assets/images/map/icons/map-element/youtube.svg",
      link: "https://www.rocketsite.pt",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}