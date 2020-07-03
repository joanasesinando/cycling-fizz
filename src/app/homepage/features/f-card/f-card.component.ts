import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


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

  safeIconSrc : SafeUrl;
  @Input()
  set icon(icon : IconsFeaturesEnum) {
    if (icon == IconsFeaturesEnum.Calendar) {
      this.safeIconSrc = this.sanitizer.bypassSecurityTrustUrl(icon.replace("[day]", this.getDay()));
    } else {
      this.safeIconSrc = this.sanitizer.bypassSecurityTrustUrl(icon);
    }
  }

  @Input() img : any;
  @Input() title : string;
  @Input() description: string;
  @Input() routerLink: string = "/404";

  constructor(private sanitizer: DomSanitizer) { }

  getDay() : string {
    let day = (new Date()).getDate().toString();
    return (day.length == 1) ? "0" + day : day;
  }

  ngOnInit() {
  }

}
