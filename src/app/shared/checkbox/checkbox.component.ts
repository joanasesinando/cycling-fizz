import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() label: string;
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
