import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  filters = [ //FIXME completar && usar serviço para esta informação na BD?
      {
          category:"Ciclovias",
          filterGroups: [
              {
                  category:"Tipologia",
                  options: ["pista unidirecional", "pista unidirecional", "trilho"]
              },
              {
                  category:"Estado do piso",
                  options: ["bom estado", "mau estado"]
              },
              {
                  category:"",
                  options: ["segregada", "iluminação", "cargo bike friendly", "partilhada com peões"]
              }
          ]
      },
      {
          category:"Estacionamento",
          filterGroups: [
              {
                  category:"Tipologia2",
                  options: ["U invertido ou semelhante", "entorta-rodas"]
              },
              {
                  category:"Estado do piso2",
                  options: ["bom estado", "mau estado"]
              },
              {
                  category:"",
                  options: ["segregada", "iluminação", "cargo bike friendly", "partilhada com peões"]
              }
          ]
      },
      {
          category:"Lojas & Oficinas",
          filterGroups: [
              {
                  category:"Tipologia3",
                  options: ["U invertido ou semelhante", "entorta-rodas"]
              },
              {
                  category:"Estado do piso3",
                  options: ["bom estado", "mau estado"]
              },
              {
                  category:"",
                  options: ["segregada", "iluminação", "cargo bike friendly", "partilhada com peões"]
              }
          ]
      },
      {
          category:"Bikesharing",
          filterGroups: [
              {
                  category:"Tipologia4",
                  options: ["U invertido ou semelhante", "entorta-rodas"]
              },
              {
                  category:"Estado do piso4",
                  options: ["bom estado", "mau estado"]
              },
              {
                  category:"",
                  options: ["segregada", "iluminação", "cargo bike friendly", "partilhada com peões"]
              }
          ]
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
