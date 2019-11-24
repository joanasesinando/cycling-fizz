import {Component, Input, OnInit} from '@angular/core';
import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-b-card',
  templateUrl: './b-card.component.html',
  styleUrls: ['./b-card.component.scss']
})
export class BCardComponent implements OnInit {

  @Input() photoSrc : string = "../../../../assets/images/homepage/blog/photos/blog1.png";
  @Input() topic : string = "topic";
  @Input() date : Date = new Date(1996, 5, 21); //FIXME bug no mês
  @Input() title : string = "Title";
  @Input() nrComments : number = 0;
  @Input() nrLikes : number = 0;

  //FontAwesome icons
  faComments = faComments;
  faHeart = faHeart;

  constructor() { }

  ngOnInit() {
  }

}
