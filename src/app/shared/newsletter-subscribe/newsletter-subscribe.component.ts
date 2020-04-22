import {Component, HostListener, Input, OnInit} from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-subscribe',
  templateUrl: './newsletter-subscribe.component.html',
  styleUrls: ['./newsletter-subscribe.component.scss']
})
export class NewsletterSubscribeComponent implements OnInit {

  //FontAwesome icons
  faPaperPlane = faPaperPlane;

  @Input() border: boolean;

  subEmailInput;
  subscribeBtn;
  subscribeBtnMobile;
  emailHelp;

  email = new FormGroup({
    subscriptionEmail: new FormControl(
        '',
        [
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ])
  });

  constructor() {
  }

  get subscriptionEmail() { return this.email.get('subscriptionEmail'); }

  ngOnInit() {
    this.subEmailInput = document.getElementById('subEmailInput') as HTMLElement;
    this.subscribeBtn = document.getElementById('subscribeBtn') as HTMLElement;
    this.subscribeBtnMobile = document.getElementById('subscribeBtnMobile') as HTMLElement;
    this.emailHelp = document.getElementById('emailHelp') as HTMLElement;

    this.changeSubBtnSize();
  }

  changeSubBtnSize() {
    this.subscribeBtn.style.bottom = this.emailHelp.offsetHeight + this.subEmailInput.offsetHeight + "px";
    this.subscribeBtnMobile.style.bottom = this.emailHelp.offsetHeight + this.subEmailInput.offsetHeight + "px";
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.changeSubBtnSize();
  }

}
