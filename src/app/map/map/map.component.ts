import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  quickFilters = [
      {text:"Ciclovias", id: "switch1"},
      {text:"Estacionamento", id: "switch2"},
      {text:"Lojas & Oficinas", id: "switch3"},
      {text:"Bikesharing", id: "switch4"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
