import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-map-cards-checkbox',
  templateUrl: './map-cards-checkbox.component.html',
  styleUrls: ['./map-cards-checkbox.component.scss']
})
export class MapCardsCheckboxComponent implements OnInit {

  @Input() label: string;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() status: string;
  @Input() icon: string;
  @Input() hint: string;

  @Output() onCheckedChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  checkedChanged() {
    this.onCheckedChange.emit();
  }


}
