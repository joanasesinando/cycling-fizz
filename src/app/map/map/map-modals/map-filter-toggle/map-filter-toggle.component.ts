import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-map-filter-toggle',
  templateUrl: './map-filter-toggle.component.html',
  styleUrls: ['./map-filter-toggle.component.scss']
})
export class MapFilterToggleComponent implements OnInit {

  @Input() label: string;
  @Input() checked: boolean;
  @Input() name: string;

  @Output() onCheckedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  checkedChanged() {
    this.onCheckedChange.emit();
  }

}
