import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel3',
  templateUrl: './carousel3.component.html',
  styleUrls: ['./carousel3.component.scss']
})
export class Carousel3Component implements OnInit {

  @Input() deckArray;

  constructor() { }

  ngOnInit() {
    this.splitArrayInDecks();
  }

  splitArrayInDecks () {
    let tempArray = [];

    for (let i = 0; i < this.deckArray.length; i += 3) {
      if      (i+2 < this.deckArray.length) tempArray.push([this.deckArray[i], this.deckArray[i+1], this.deckArray[i+2]]);
      else if (i+1 < this.deckArray.length) tempArray.push([this.deckArray[i], this.deckArray[i+1]]);
      else if (i   < this.deckArray.length) tempArray.push([this.deckArray[i]]);
    }

    this.deckArray = tempArray;
  }



}
