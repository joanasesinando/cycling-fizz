import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-cards-info',
  templateUrl: './map-card-info.component.html',
  styleUrls: ['./map-card-info.component.scss']
})
export class MapCardInfoComponent implements OnInit {

  @Input() infos: {label: string, icon: string, hint: string}[];
  @Input() info: boolean[];
  @Input() editMode: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
