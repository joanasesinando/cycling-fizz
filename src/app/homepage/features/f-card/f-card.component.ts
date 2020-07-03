import {Component, Input, OnInit} from '@angular/core';

export enum IconsFeaturesEnum {
  Beginner = "../../../assets/images/homepage/features/icons/beginner.svg",
  Calendar = "../../../assets/images/homepage/features/icons/calendar.svg",
  Forum = "../../../assets/images/homepage/features/icons/forum.svg",
  Map = "../../../assets/images/homepage/features/icons/map.svg",
  Route = "../../../assets/images/homepage/features/icons/route.svg",
  TrafficLight = "../../../assets/images/homepage/features/icons/traffic-light.svg"
}


@Component({
  selector: 'app-f-card',
  templateUrl: './f-card.component.html',
  styleUrls: ['./f-card.component.scss']
})

export class FCardComponent implements OnInit {

  IconsFeatures = IconsFeaturesEnum;

  @Input() icon: IconsFeaturesEnum;
  @Input() title : string;
  @Input() description: string;
  @Input() routerLink: string = "/404";

  constructor() { }

  getDay() : string {
    let day = (new Date()).getDate().toString();
    return (day.length == 1) ? "0" + day : day;
  }

  ngOnInit() {}

}
