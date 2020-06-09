import {Component, Input, OnInit} from '@angular/core';
import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-b-card',
  templateUrl: './b-card.component.html',
  styleUrls: ['./b-card.component.scss']
})
export class BCardComponent implements OnInit {

  @Input() photoSrc : string;
  @Input() topic : string;
  @Input() date : Date;
  @Input() title : string;
  @Input() nrComments : number;
  @Input() nrLikes : number;

  //FontAwesome icons
  faComments = faComments;
  faHeart = faHeart;

  constructor() { }

  ngOnInit() {
  }

}
