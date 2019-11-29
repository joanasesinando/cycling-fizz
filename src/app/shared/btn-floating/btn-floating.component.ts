import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-floating',
  templateUrl: './btn-floating.component.html',
  styleUrls: ['./btn-floating.component.scss']
})
export class BtnFloatingComponent implements OnInit {

  actionBtn;

  constructor() {
    this.closeWhenClickedOutside()
  }

  ngOnInit() {
    this.actionBtn = $(".action-button");
  }

  toggleFloatingBtn(){
    this.actionBtn.toggleClass('open');
  }

  closeWhenClickedOutside() {
    $("html").on('click', (event) => {
      if(!this.actionBtn.is(event.target) // The target of the click isn't the form
          && this.actionBtn.has(event.target).length === 0 // Nor a child element of the form
          && this.actionBtn.hasClass('open')) { // And the form is focused

        this.toggleFloatingBtn();
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    // Glue btn to bottom of map on scroll
    function btnGlue() {
      let actionBtn = $('.action-button');

      if(actionBtn.offset().top > 740) {
        actionBtn.addClass('glue-bottom');
      }
    }

    // Glue now if page is not at top
    btnGlue();
  }

}
