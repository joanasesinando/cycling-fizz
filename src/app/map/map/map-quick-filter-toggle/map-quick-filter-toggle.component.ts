import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-map-quick-filter-toggle',
  templateUrl: './map-quick-filter-toggle.component.html',
  styleUrls: ['./map-quick-filter-toggle.component.scss']
})
export class MapQuickFilterToggleComponent implements OnInit {

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
