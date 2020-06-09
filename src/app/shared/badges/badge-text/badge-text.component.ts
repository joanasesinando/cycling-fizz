import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-badge-text',
  templateUrl: './badge-text.component.html',
  styleUrls: ['./badge-text.component.scss']
})
export class BadgeTextComponent implements OnInit {

  @Input() badgeType: string;
  @Input() badgeText: string;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    switch (this.badgeType) {
      case 'new':
        this.translate.stream('badges.new').subscribe((text:string) => { this.badgeText = text; });
        break;

      case 'soon':
        this.translate.stream('badges.soon').subscribe((text:string) => { this.badgeText = text; });
        break;

      default:
        break;
    }
  }

}
