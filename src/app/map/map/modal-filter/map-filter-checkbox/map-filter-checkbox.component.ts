import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-map-filter-checkbox',
  templateUrl: './map-filter-checkbox.component.html',
  styleUrls: ['./map-filter-checkbox.component.scss']
})
export class MapFilterCheckboxComponent implements OnInit {

  @Input() label: string;

  @Output() onCheckedChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  checkedChanged() {
    this.onCheckedChange.emit();
  }

}
