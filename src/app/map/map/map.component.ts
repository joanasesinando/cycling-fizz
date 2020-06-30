import {AfterViewInit, Component, OnInit, TemplateRef} from '@angular/core';
import * as eva from 'eva-icons';
import {NbDialogService, NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  filters = [ // FIXME: put in a json file
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

    // General
    type: string = "";
    name: string = "Name not found";
    lat: number = null;
    lng: number = null;
    lastUpdated: {date: Date, by: string} = {date: null, by: ""};
    address: string = "Address not found";
    photos: {img: string, user: {name: string, avatar: string}}[] = [];
    comments: {text: string, user: {name: string, avatar: string}, date: Date}[] = [];

    // Bikelanes
    bklType?: string = "Type not found";
    bklSteep?: string = "Steep not found";
    bklFloor?: string = "Floor not found";
    bklNotes?: string = "";
    bklInfo?: {icon: string, label: string, checked: boolean}[] = [];

    // Parking
    prkType?: string = "Type not found";
    prkPlaces?: string = "Number of places not found";
    prkSecurity?: number = null;
    prkEnvironment?: string = "Environment not found";
    prkAccess?: string = "Access not found";
    prkNotes?: string = "";
    prkInfo?: {icon: string, label: string, checked: boolean}[] = [];

    // Stores
    strRating?: number = null;
    strRatingSource?: string = "Source not found";
    strAddress?: string = "Address not found";
    strHours?: string = "Working hours not found";
    strPhone?: string = "Phone number not found";
    strDescription?: string = "";
    strLinks?: {type: string, link: string}[] = [];

  constructor(private sidebarService: NbSidebarService, private dialogService: NbDialogService) {
      // FIXME: retirar isto após ligação ao server done
      this.type = "str";
      this.name = "Avenida Fontes Pereira de Melo"
      this.lat = 38.7353927;
      this.lng = -9.1388712;
      this.lastUpdated.date = new Date("2019/03/30");
      this.lastUpdated.by = "Cycling Fizz Team";
      this.address = "Rua 25 de Abril, Nº29, Loures, Lisboa";
      this.photos = [
          {
              img: "../../../../../assets/images/map/gallery/img1.jpg",
              user: {
                  name: "username1",
                  avatar: "../../../../../assets/images/map/avatars/avatar1.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img2.jpg",
              user: {
                  name: "username2",
                  avatar: "../../../../../assets/images/map/avatars/avatar2.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img3.jpg",
              user: {
                  name: "username3",
                  avatar: "../../../../../assets/images/map/avatars/avatar3.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img4.jpg",
              user: {
                  name: "username4",
                  avatar: "../../../../../assets/images/map/avatars/avatar4.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img5.jpg",
              user: {
                  name: "username5",
                  avatar: "../../../../../assets/images/map/avatars/avatar5.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img6.jpg",
              user: {
                  name: "username6",
                  avatar: "../../../../../assets/images/map/avatars/avatar6.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img7.jpg",
              user: {
                  name: "username7",
                  avatar: "../../../../../assets/images/map/avatars/avatar7.jpg"
              }
          },
          {
              img: "../../../../../assets/images/map/gallery/img8.jpg",
              user: {
                  name: "username8",
                  avatar: "../../../../../assets/images/map/avatars/avatar8.jpg"
              }
          },
      ];
      this.comments = [
          {
              text: "Et id magna amet nostrud quis nulla irure ad et laborum.",
              user: {
                  name: "username1",
                  avatar: "../../../../../assets/images/map/avatars/avatar1.jpg"
              },
              date: new Date()
          },
          {
              text: "Ipsum esse culpa ea non cupidatat nisi dolor occaecat laboris culpa aute deserunt in.",
              user: {
                  name: "username4",
                  avatar: "../../../../../assets/images/map/avatars/avatar4.jpg"
              },
              date: new Date()
          },
          {
              text: "Exercitation laboris dolore aliqua irure do enim adipisicing eiusmod id officia ad quis culpa. Ex ipsum ad mollit quis aute " +
                  "sunt cupidatat. Eiusmod elit sit cupidatat dolore mollit. Aliquip voluptate in ad officia nostrud proident.",
              user: {
                  name: "username8",
                  avatar: "../../../../../assets/images/map/avatars/avatar8.jpg"
              },
              date: new Date(1996, 5, 21, 12, 44, 20)
          }
      ];
  }

  ngOnInit() { }

    ngAfterViewInit() {
      eva.replace();
    }

    updateFilter(category) {
      let quickFilterSwitch = $( ".filter-" + category.toLowerCase() + " .toggle" );
      quickFilterSwitch.trigger( "click" );
    }

    toggleSidebar() {
      this.sidebarService.toggle(false, 'left');
    }

    open(dialog: TemplateRef<any>) {
      this.dialogService.open(dialog);
    }
}
