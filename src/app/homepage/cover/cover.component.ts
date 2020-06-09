import { Component, OnInit, TemplateRef} from '@angular/core';

import {faTwitter, faInstagram, faFacebookF, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {NbDialogService} from '@nebular/theme';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  //FontAwesome icons
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faArrowRight = faArrowRight;

  videoUrl: string = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  safeVideoUrl: SafeResourceUrl;

  constructor(private dialogService: NbDialogService, private sanitizer: DomSanitizer) {
    this.safeVideoUrl = this.sanitizeUrl(this.videoUrl);
  }

  ngOnInit() {
  }

  loadFeatherIcons() {
    feather.replace();
  }

  smoothScroll(event){
    event.preventDefault();

    document.querySelector(event.currentTarget.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  };

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  sanitizeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
