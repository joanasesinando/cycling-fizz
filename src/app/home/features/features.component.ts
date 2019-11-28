import {Component, HostListener, Input, OnInit} from '@angular/core';
import { IconsFeaturesEnum } from './f-card/f-card.component';



@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  IconsFeatures = IconsFeaturesEnum;
  mobileView: boolean = false;

  //flag so the function doesn't run on construction bc it wouldn't be able to find #features-container
  doChangeFading:  boolean = false;

  constructor() {
    this.onWindowResize();
    this.doChangeFading = true;
  }

  ngOnInit() { }

  changeFading(){
    let features = document.getElementById("features-container");
    this.mobileView ? features.setAttribute("data-aos", "fade-up") : features.setAttribute("data-aos", "fade-left");
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.mobileView = window.innerWidth <= 991.98;
    if(this.doChangeFading) this.changeFading();
  }

  public getDay() {
    return (new Date()).getDate();
  }
}
