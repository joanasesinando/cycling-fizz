import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() badgeType: string;
  badgeText: string;

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
        this.badgeText = "";
        break;
    }
  }

}
