import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-switch',
  templateUrl: './filter-switch.component.html',
  styleUrls: ['./filter-switch.component.scss']
})
export class FilterSwitchComponent implements OnInit {

  @Input() filterText: string;
  @Input() switchId: string;

  constructor() { }

  ngOnInit() {
  }

}
