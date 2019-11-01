import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-f-card',
  templateUrl: './f-card.component.html',
  styleUrls: ['./f-card.component.scss']
})
export class FCardComponent implements OnInit {
  @Input() iconSrc : string = "../../../../assets/images/blog.svg";
  @Input() title : string = "Title";
  @Input() description: string = "description";

  constructor() { }

  ngOnInit() {
  }

}
