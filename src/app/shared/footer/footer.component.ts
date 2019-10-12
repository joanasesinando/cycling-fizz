import { Component, OnInit } from '@angular/core';

import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //FontAwesome icons
  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;

  constructor() { }

  ngOnInit() {
  }

}
