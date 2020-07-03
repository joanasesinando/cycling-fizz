import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-f-card',
  templateUrl: './f-card.component.html',
  styleUrls: ['./f-card.component.scss']
})

export class FCardComponent implements OnInit {

  @Input() id : string;
           iconSrc: string;
  @Input() title : string;
  @Input() description: string;
  @Input() routerLink: string = "/404";

  day: string;

  constructor() {
    this.day = this.formatDay(new Date().getDate());
  }

  formatDay(day: number) {
    return day > 9 ? "" + day: "0" + day;
  }

  getDay() : string {
    let day = (new Date()).getDate().toString();
    return (day.length == 1) ? "0" + day : day;
  }

  ngOnInit() {
    switch (this.id) {
      case "beginner":
        this.iconSrc = "../../../assets/images/homepage/features/icons/beginner.svg";
        break;

      case "calendar":
        this.iconSrc = "../../../assets/images/homepage/features/icons/calendar.svg";
        break;

      case "forum":
        this.iconSrc = "../../../assets/images/homepage/features/icons/forum.svg";
        break;

      case "map":
        this.iconSrc = "../../../assets/images/homepage/features/icons/map.svg";
        break;

      case "routes":
        this.iconSrc = "../../../assets/images/homepage/features/icons/route.svg";
        break;

      case "traffic-rules":
        this.iconSrc = "../../../assets/images/homepage/features/icons/traffic-light.svg";
        break;

      default:
        break;
    }
  }

}
