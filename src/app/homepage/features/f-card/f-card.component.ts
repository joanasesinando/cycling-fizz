import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


export enum IconsFeaturesEnum {
  Beginner = "../../../assets/images/homepage/features/icons/beginner.svg",
  Calendar = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator " +
    "19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3." +
    "org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-backgr" +
    "ound:new 0 0 512 512;' xml:space='preserve'%3E%3Cpath style='fill:%23F2F2F2;' d='M0,154.501v314.773c0,23.573,19.083" +
    ",42.667,42.667,42.667h426.667 c23.563,0,42.667-19.093,42.667-42.667V154.501L0,154.501L0,154.501z'/%3E%3Ctext id='da" +
    "y' x='85' y='450' font-size='350' font-family='Calibri' font-weight='bold' fill='%2340596B'%3E[day]%3C/text%3E%3Cpath " +
    "style='fill:%23FF7058;' d='M469.333,30.416H42.667C19.104,30.416,0,49.52,0,73.083v81.483h512V73.083 C512,49.52,492.8" +
    "96,30.416,469.333,30.416'/%3E%3Cg%3E%3Cpath style='fill:%23FFFFFF;' d='M444.213,92.475c0,16.672-13.504,30.187-30.18" +
    "7,30.187c-16.672,0-30.165-13.515-30.165-30.187 s13.504-30.187,30.165-30.187C430.709,62.288,444.213,75.803,444.213,9" +
    "2.475'/%3E%3Cpath style='fill:%23FFFFFF;' d='M128.171,92.475c0,16.672-13.525,30.187-30.187,30.187s-30.165-13.515-30" +
    ".165-30.187 s13.504-30.187,30.165-30.187S128.171,75.803,128.171,92.475'/%3E%3C/g%3E%3Cg%3E%3Cpath style='fill:%2340" +
    "596B;' d='M414.336,0.059c-11.083,0-20.085,8.981-20.085,20.085l-0.309,65.109 c0,11.093,9.003,20.085,20.107,20.085c11" +
    ".083,0,20.085-8.992,20.085-20.085l0.309-65.109C434.443,9.04,425.44,0.059,414.336,0.059' /%3E%3Cpath style='fill:%23" +
    "40596B;' d='M98.293,0.059L98.293,0.059c-11.083,0-20.085,8.981-20.085,20.085l-0.309,65.099 c0,11.093,9.003,20.085,20" +
    ".085,20.085c11.104,0,20.085-8.992,20.085-20.085l0.309-65.109C118.379,9.04,109.397,0.059,98.293,0.059' /%3E%3C/g%3E%" +
    "3C/svg%3E",
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
