import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss']
})
export class GoTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hasScrolled() {
    return window.pageYOffset > 350 && window.innerWidth >= 768;
  }

  goToTop() {
    window.scrollTo(0, 0);
  }
}
