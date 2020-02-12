import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  formControl;
  clear;

  constructor() {
    this.shrinkWhenClickedOutside()
  }

  ngOnInit() {
    this.formControl = $('.form-control');
    this.clear = $('.clear');
  }

  expand() {
    this.formControl.addClass("is-focus");
    this.clear.toggleClass("invisible");
  }

  shrink() {
    this.formControl.removeClass("is-focus");
    this.clear.toggleClass("invisible");
  }

  toggleSearchBar(event){
    event.preventDefault();
    if(!this.formControl.hasClass("is-focus")) this.expand();
  }

  shrinkWhenClickedOutside() {
    $("html").on('click', (event) => {
      if(!this.formControl.is(event.target) // The target of the click isn't the form
          && this.formControl.has(event.target).length === 0 // Nor a child element of the form
          && this.formControl.hasClass('is-focus')) { // And the form is focused

        this.shrink();
      }
    });
  }

}
