import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-cards-small',
  templateUrl: './map-card-small.component.html',
  styleUrls: ['./map-card-small.component.scss']
})
export class MapCardSmallComponent implements OnInit {

  @Input() iconSrc: string;
  @Input() title: string;
  @Input() hint: string;
  @Input() editMode: boolean;
  @Input() option: {id: number, label: string};
  @Input() options: {id: number, label: string}[];

  constructor() { }

  ngOnInit(): void {
  }

}
