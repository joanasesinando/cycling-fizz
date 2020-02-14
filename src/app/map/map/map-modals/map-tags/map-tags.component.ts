import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-tags',
  templateUrl: './map-tags.component.html',
  styleUrls: ['./map-tags.component.scss']
})
export class MapTagsComponent implements OnInit {

  tags = [
    {
      text: "seguro",
      color: "orange"
    },
    {
      text: "precisa reparações",
      color: "purple"
    },
    {
      text: "perigoso",
      color: "green"
    },
    {
      text: "kids friendly",
      color: "red"
    },
    {
      text: "bom design",
      color: "darkBlue"
    },
    {
      text: "muito usado",
      color: "blue"
    },
    {
      text: "local remoto",
      color: "yellow"
    },
    {
      text: "mau design",
      color: "pink"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
