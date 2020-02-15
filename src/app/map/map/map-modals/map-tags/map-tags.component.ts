import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-tags',
  templateUrl: './map-tags.component.html',
  styleUrls: ['./map-tags.component.scss']
})
export class MapTagsComponent implements OnInit {

  @Input() tags;

  constructor() { }

  ngOnInit(): void {
  }

}
