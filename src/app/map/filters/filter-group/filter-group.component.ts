import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements OnInit {

  @Input() filterGroups;

  constructor() { }

  ngOnInit() {
  }

}
