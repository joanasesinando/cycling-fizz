import {Component, OnInit} from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    //FontAwesome icons
    faFilter = faFilter;

  filters = [ //FIXME completar && colocar num json
      {
          category:"Ciclovias",
          checked: true,
          name: "bikelanes",
          filterGroups: [
              {
                  category:"Tipologia",
                  options: ["pista unidirecional", "pista bidirecional", "trilho", "outro"]
              },
              {
                  category:"Estado do piso",
                  options: ["maioritariamente liso", "ligeiramente abrupto", "muito abrupto"]
              },
              {
                  category:"",
                  options: ["segregada", "iluminação", "cargo bike friendly", "partilhada com peões"]
              }
          ]
      },
      {
          category:"Estacionamento",
          checked: false,
          name: "parking",
          filterGroups: [
              {
                  category:"Tipologia",
                  options: ["U invertido ou semelhante", "entorta-rodas", "poste", "outro"]
              },
              {
                  category:"Nº de lugares",
                  options: ["menos de 3", "4 - 8", "9 - 12", "mais de 12"]
              },
              {
                  category:"Segurança",
                  options: ["muito seguro", "seguro", "inseguro", "muito inseguro"]
              },
              {
                  category:"Ambiente",
                  options: ["sempre movimentado", "movimentado seg-sex", "movimentado sab-dom",
                            "deserto seg-sex", "deserto sab-dom", "sempre deserto"]
              },
              {
                  category:"",
                  options: ["coberto", "iluminação", "supervisão"]
              }
          ]
      },
      {
          category:"Lojas & Oficinas",
          checked: false,
          name: "stores",
          filterGroups: [
              {
                  category:"",
                  options: ["abertas agora"]
              }
          ]
      },
      {
          category:"Bikesharing",
          checked: false,
          name: "bikesharing",
          filterGroups: [
              {
                  category:"Companhia",
                  options: ["Gira", "Uber Jump", "Hive Bikes", "Moobi Cascais"]
              },
              {
                  category:"",
                  options: ["com bicicletas", "com lugares livres"]
              }
          ]
      }
  ];

  constructor() { }

  ngOnInit() {
  }

  updateFilter(category) {

      let quickFilterSwitch = $( ".filter-" + category.toLowerCase() + " .toggle" );

      // trigger a click on the corresponding switch
      quickFilterSwitch.trigger( "click" );
  }

}
