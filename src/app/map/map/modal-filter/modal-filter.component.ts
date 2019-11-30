import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.scss']
})
export class ModalFilterComponent implements OnInit {

  @Input() filters;

  constructor() { }

  ngOnInit() {
  }

  toggleFilterGroupsVisibility(switchId) {
    let filterGroupId: string = "#filter-group-" + (switchId.slice(-1)-4);
    let filterGroup = $(filterGroupId);

    if(filterGroup.hasClass("d-block")) {
      filterGroup.removeClass("d-block");
      filterGroup.addClass("d-none");

    } else {
      filterGroup.removeClass("d-none");
      filterGroup.addClass("d-block");
    }
  }

}
