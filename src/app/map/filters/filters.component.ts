import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() filters: {category: string, checked: boolean, name: string, filterGroups: {category: string, options: string[]}[]}[];

  @Output() onCloseBtnClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() { this.onCloseBtnClicked.emit(true); }

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
