import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-cards-small',
  templateUrl: './map-card-small.component.html',
  styleUrls: ['./map-card-small.component.scss']
})
export class MapCardSmallComponent implements OnInit {

  @Input() type?: string = "text"; // types: text, number, stars
  @Input() iconSrc: string;
  @Input() title: string;
  @Input() hint: string;
  @Input() editMode: boolean;
  @Input() option: any;
  @Input() options: any;

  constructor() { }

  ngOnInit(): void {
  }

}
