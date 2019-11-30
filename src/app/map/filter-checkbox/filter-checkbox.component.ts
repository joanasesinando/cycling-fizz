import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
})
export class FilterCheckboxComponent implements OnInit {

  @Input() checkboxText: string;
  @Input() checkboxId: string;

  constructor() { }

  ngOnInit() {
  }

}
