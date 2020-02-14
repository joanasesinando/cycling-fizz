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
                  options: ["pista unidirecional", "pista bidirecional", "zona 30", "trilho", "parque", "outro"]
              },
              {
                  category:"Declive",
                  options: ["direito", "misto", "íngreme"]
              },
              {
                  category:"Geral",
                  options: ["segregada", "iluminada", "cargo bike friendly", "partilhada com peões"]
              },
              {
                  category:"Etiquetas",
                  options: ["segura", "perigosa", "precisa reparações", "adequada a crianças", "local remoto", "muito movimento",
                      "pouco movimento"]
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
                  options: ["U invertido", "de roda", "poste", "suspenso", "grade/vedação", "outro"]
              },
              {
                  category:"Nº de lugares",
                  options: ["menos de 4", "4 - 8", "9 - 12", "mais de 12"]
              },
              {
                  category:"Segurança",
                  options: ["seguro", "inseguro"] //seguro >4 & inseguro <2.5
              },
              {
                  category:"Ambiente",
                  options: ["sempre movimentado", "movimentado seg-sex", "movimentado sáb-dom", "pouco movimentado"]
              },
              {
                  category:"Acesso",
                  options: ["público", "privado", "fácil acesso", "difícil acesso"]
              },
              {
                  category:"Geral",
                  options: ["coberto", "espaçoso", "vigiado", "visível", "iluminação"]
              },
              {
                  category:"Etiquetas",
                  options: ["precisa reparações"]
              }
          ]
      },
      {
          category:"Lojas & Oficinas",
          checked: false,
          name: "stores",
          filterGroups: [
              {
                  category:"Geral",
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
                  category:"Geral",
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
