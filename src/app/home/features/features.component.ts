import { Component, OnInit } from '@angular/core';
import { IconsFeaturesEnum } from './f-card/f-card.component';



@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  IconsFeatures = IconsFeaturesEnum;

  constructor() { }

  ngOnInit() {
  }

  public getDay() {
    return (new Date()).getDate();
  }
}
