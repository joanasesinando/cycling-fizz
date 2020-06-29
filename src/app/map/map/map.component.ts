import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as eva from 'eva-icons';
import {NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  filters = [
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
                  category:"Inclinação",
                  options: ["plano", "misto", "íngreme"]
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
                  options: ["coberto", "espaçoso", "vigiado", "visível", "iluminado"]
              },
              {
                  category:"Etiquetas",
                  options: ["precisa reparações", "muito usado", "pouco usado"]
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
              },
              {
                  category:"Etiquetas",
                  options: ["com oficina", "peças", "equipamento", "acessórios", "cadeados", "personalizar bicicleta"]
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

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      eva.replace();
  }

  updateFilter(category) {
    let quickFilterSwitch = $( ".filter-" + category.toLowerCase() + " .toggle" );
    quickFilterSwitch.trigger( "click" );
  }

    toggle() {
        this.sidebarService.toggle(false, 'left');
    }
}
