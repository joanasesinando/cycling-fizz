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

  toggleFilterGroups(category) {

    let quickFilterSwitch = $( ".filter-" + category.toLowerCase() + " .toggle" );
    let filterGroup = $(".filter-group-" + category.toLowerCase());

    // trigger a click on the corresponding switch
    quickFilterSwitch.trigger( "click" );

    // show/hide filter groups based on switch toggled
    if(filterGroup.css('display') == 'block' || filterGroup.css('display') == 'inline') filterGroup.hide();
    else if(filterGroup.css('display') == 'none') filterGroup.show();
  }

}
