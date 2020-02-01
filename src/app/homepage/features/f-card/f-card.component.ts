import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


export enum IconsFeaturesEnum {
  Beginner = "../../../assets/images/homepage/features/icons/beginner.svg",
  Calendar =  "data:image/svg+xml,%0A%3Csvg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'%3E" +
      "%3Cpath d='M2.88336 0.466339H41.6091C43.136 0.466339 44.3752 1.70944 44.3752 3.24428V42.1348C44.3752 43.6682 43.136 44.9128 41.6091 " +
      "44.9128H2.88336C1.35645 44.9126 0.117188 43.6682 0.117188 42.1348V3.24428C0.117188 1.70944 1.35645 0.466339 2.88336 0.466339Z' " +
      "fill='%23E4E7E7'/%3E%3Cpath d='M41.6092 0.466339H2.88337C1.35645 0.466339 0.117188 1.70945 0.117188 3.24429V10.189H44.3752V3.24429" +
      "C44.3752 1.70945 43.1361 0.466339 41.6092 0.466339Z' fill='%23F7554A'/%3E%3Ctext x='8' y='35' font-size='28' " +
      "font-family='Calibri' font-weight='bold' fill='%235A7B8C'%3E[day]%3C/text%3E%3Cpath d='M0.117188 8.80002H44.3754V11.578H0.117188" +
      "V8.80002Z' fill='%23E33B2F'/%3E%3Cpath d='M22.2461 3.24429C23.0109 3.24429 23.6292 3.86647 23.6292 4.63324C23.6292 5.40001 " +
      "23.0109 6.02219 22.2461 6.02219C21.4813 6.02219 20.863 5.40001 20.863 4.63324C20.863 3.86647 21.4812 3.24429 22.2461 3.24429Z' " +
      "fill='%23E33B2F'/%3E%3Cpath d='M41.6092 42.1349H2.88336C1.35645 42.1349 0.117188 40.8903 0.117188 39.3569V42.1349C0.117188 " +
      "43.6683 1.35645 44.9129 2.88336 44.9129H41.6092C43.1361 44.9129 44.3754 43.6683 44.3754 42.1349V39.3569C44.3752 40.8903 43.1361 " +
      "42.1349 41.6092 42.1349Z' fill='%23C2C5C5'/%3E%3C/svg%3E",
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

  private safeIconSrc : SafeUrl;
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