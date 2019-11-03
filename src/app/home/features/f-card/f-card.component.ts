import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-f-card',
  templateUrl: './f-card.component.html',
  styleUrls: ['./f-card.component.scss']
})
export class FCardComponent implements OnInit {
  @Input() iconSrc : string = "../../../../assets/images/blog.svg";   //FIXME mudar default p/ algo melhor
  @Input() title : string = "Title";
  @Input() description: string = "description";
  @Input() href: string = "#";   //FIXME mudar default p/ algo melhor (404 page?)

  constructor() { }

  ngOnInit() {
  }

}
