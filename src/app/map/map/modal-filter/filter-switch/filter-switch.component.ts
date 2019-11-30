import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-switch',
  templateUrl: './filter-switch.component.html',
  styleUrls: ['./filter-switch.component.scss']
})
export class FilterSwitchComponent implements OnInit {

  @Input() switchBeforeText: boolean;
  @Input() filterText: string;
  @Input() switchId: string;

  @Output() onCheckboxClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  checkboxClicked(switchId) {
    this.onCheckboxClicked.emit(switchId);
  }

}
