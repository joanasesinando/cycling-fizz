import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-credits-item',
  templateUrl: './credits-item.component.html',
  styleUrls: ['./credits-item.component.scss']
})
export class CreditsItemComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() by: string;
  @Input() byUrl: string;
  @Input() from: string;
  @Input() fromUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
