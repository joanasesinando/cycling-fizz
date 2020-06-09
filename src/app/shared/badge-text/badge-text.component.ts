import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-badge-text',
  templateUrl: './badge-text.component.html',
  styleUrls: ['./badge-text.component.scss']
})
export class BadgeTextComponent implements OnInit {

  @Input() badgeType: string;
  @Input() badgeText: string;

  constructor() { }

  ngOnInit() {
    switch (this.badgeType) {
      case 'new':
        this.badgeText = "Novo";
        break;

      case 'soon':
        this.badgeText = "Em Breve";
        break;

      default:
        break;
    }
  }

}
