import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-map-element',
  templateUrl: './map-element.component.html',
  styleUrls: ['./map-element.component.scss']
})
export class MapElementComponent implements OnInit {

  // General
  @Input() type: string;
           icon: string;
  @Input() name: string;
  @Input() lat: number;
  @Input() lng: number;
  @Input() lastUpdated: {date: Date, by: string};
  @Input() address: string;
  @Input() photos: {img: string, user: {name: string, avatar: string}}[];
  @Input() comments: {text: string, user: {name: string, avatar: string}, date: Date}[];

  // Bikelanes
  @Input() bklType?: string;
  @Input() bklSteep?: string;
  @Input() bklFloor?: string;
  @Input() bklNotes?: string;
  @Input() bklInfo?: {icon: string, label: string, checked: boolean}[];

  // Parking
  @Input() prkType?: string;
  @Input() prkPlaces?: string;
  @Input() prkSecurity?: number;
  @Input() prkEnvironment?: string;
  @Input() prkAccess?: string;
  @Input() prkNotes?: string;
  @Input() prkInfo?: {icon: string, label: string, checked: boolean}[];

  // Stores
  @Input() strRating?: number;
  @Input() strRatingSource?: string;
           strRatingArray: boolean[] = []; //needs to be an array for *ngFor to work
  @Input() strAddress?: string;
  @Input() strHours?: string;
  @Input() strPhone?: string;
  @Input() strDescription?: string;
  @Input() strLinks?: {type: string, link: string}[];

  @Output() onCloseBtnClicked = new EventEmitter<boolean>();

  editMode: boolean = false;
  reason = new FormGroup({
    deletingReason: new FormControl(
        '',
        [
          Validators.required
        ])
  });

  constructor(private dialogService: NbDialogService, private toastrService: NbToastrService) { }

  get deletingReason() { return this.reason.get('deletingReason'); }

  ngOnInit(): void {
    if(this.type == "bkl") {
      this.icon = "../../../assets/images/map/icons/icon-bikelane.svg";

    } else if(this.type == "prk") {
      this.icon = "../../../assets/images/map/icons/icon-parking.svg";

    } else if(this.type == "str") {
      this.icon = "../../../assets/images/map/icons/icon-store.svg";
      this.strRatingArray = this.createStoreRatingArray(this.strRating);

    } else if(this.type == "bks") {
      this.icon = "../../../assets/images/map/icons/icon-bikesharing.svg";
    }
  }

  createStoreRatingArray(storeRating) {
    let array = [];
    let roundedRating = Math.round(storeRating);

    for(let i = 0; i < roundedRating; i++) array.push(true);
    if(roundedRating < 5) for(let i = 0; i < 5-roundedRating; i++) array.push(false);
    return array;
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  showSuccessToast(message, title) {
    this.toastrService.success(message, title, {duration: 20000});
  }

  showInfoToast(message, title) {
    this.toastrService.info(message, title, {duration: 20000});
  }

  showFailureToast(message, title) {
    this.toastrService.danger('Ocorreu um erro. Por favor tenta de novo.', 'Ups...', {duration: 3000});
  }

  sendEditChanges() { // TODO: enviar alterações para pasta específica de e-mail
    console.log("Alterações enviadas com sucesso");
    this.showInfoToast('🏆 Verifica o teu nível de contribuições na tua conta de utilizador ' +
        'e vê que prémios podes ganhar.','Participa e ganha!');

    this.showSuccessToast('As tuas alterações vão ser revistas antes de serem colocadas online.\n\n' +
        'Obrigada por contribuíres e ajudares a melhorar o mapa. A comunidade de ciclistas agradece! 👏',
        'Alterações enviadas');
  }

  submitDeletionRequest() { // TODO: enviar alterações para pasta específica de e-mail,
    console.log("Pedido para apagar elemento enviado com sucesso");
    this.showSuccessToast('O teu pedido vai ser revisto antes de ser colocado online.\n\n' +
        'Obrigada por contribuíres e ajudares a melhorar o mapa. A comunidade de ciclistas agradece! 👏',
        'Pedido enviado');
  }

  closeBtnClicked() { this.onCloseBtnClicked.emit(true); }

}
