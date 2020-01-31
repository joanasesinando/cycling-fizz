import {Component, Input, OnInit} from '@angular/core';
import { faTwitter, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {

  //FontAwesome icons
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;

  @Input() name: string;
  @Input() job: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

  changeImage(name) {

  }

}
