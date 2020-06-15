import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() label: string;
  @Input() labelPosition: string;
  @Input() labelColor: string;
  @Input() checked?: boolean;
  @Input() status: string;
  @Input() name?: string;

  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  checkedChanged() {
    this.checkedChange.emit(this.checked);
  }

}
