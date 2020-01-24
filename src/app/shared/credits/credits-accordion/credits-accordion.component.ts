import { Component, OnInit } from '@angular/core';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-credits-accordion',
  templateUrl: './credits-accordion.component.html',
  styleUrls: ['./credits-accordion.component.scss']
})
export class CreditsAccordionComponent implements OnInit {

  // FontAwesome icons
  faChevronCircleDown = faChevronCircleDown;
  faChevronCircleUp = faChevronCircleUp;

  faq_opened = {id: "", icon: "", title: ""};

  login = [
    {
      img: '../../../../assets/images/navbar/modal/ilustrations/green-girl.svg',
      by: 'pikisuperstar',
      byUrl: 'https://www.freepik.com/pikisuperstar',
      from: 'www.freepik.com',
      fromUrl: 'https://www.freepik.com/',
      circle: true
    }
  ];

  navbar = [
    {
      img: '../../../../assets/images/navbar/icons/blog.svg',
      by: 'flaticon',
      byUrl: 'https://www.flaticon.com',
      from: 'www.freepik.com',
      fromUrl: 'https://www.freepik.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/calendar.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/idea.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/envelope.svg',
      by: 'Those Icons',
      byUrl: 'https://www.flaticon.com/authors/those-icons',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/portugues.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/english.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/français.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    }
  ];

  homepage = [
    {
      img: '../../../../assets/images/homepage/cover/ilustrations/hero.svg',
      by: 'pikisuperstar',
      byUrl: 'https://www.freepik.com/pikisuperstar',
      from: 'www.freepik.com',
      fromUrl: 'https://www.freepik.com/',
      circle: true
    },
    {
      img: '../../../../assets/images/homepage/features/ilustrations/girl.svg',
      by: 'swayaway1',
      byUrl: 'https://www.vecteezy.com/members/swayaway1',
      from: 'www.vecteezy.com',
      fromUrl: 'https://www.vecteezy.com/',
      circle: true
    },
    {
      img: '../../../../assets/images/homepage/features/icons/map.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/homepage/features/icons/traffic-light.svg',
      by: 'DinosoftLabs',
      byUrl: 'https://www.flaticon.com/authors/dinosoftlabs',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/homepage/features/icons/route.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/homepage/features/icons/beginner.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/homepage/features/icons/forum.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/homepage/features/icons/calendar.svg',
      by: 'Vectors Market',
      byUrl: 'https://www.flaticon.com/authors/vectors-market',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    }
  ];

  map = [
    {
      img: '../../../../assets/images/map/icons/bikelane.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/map/icons/parking.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    },
    {
      img: '../../../../assets/images/map/icons/store.svg',
      by: 'Smashicons',
      byUrl: 'https://www.flaticon.com/authors/smashicons',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/',
      circle: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  hideFaq(icon, title) {
    icon.setAttribute('src', '../../../../assets/images/credits/icons/arrowDown.svg');
    $(icon).addClass('arrow-down');
    $(title).removeClass('text-orange');
  }

  showFaq(icon, title) {
    icon.setAttribute('src', '../../../../assets/images/credits/icons/arrowUp.svg');
    $(icon).removeClass('arrow-down');
    $(title).addClass('text-orange');
  }

  toggleIcon(e) {
    let icon;
    let title;
    let faq_clicked;

    /* Set variables */
    if(e.target.childNodes.length == 2) { // title clicked
      icon = e.target.childNodes[1];
      title = e.target;

    } else { // icon clicked
      icon = e.target.childNodes[0];
      title = e.target.parentElement;
    }
    faq_clicked = title.parentElement.getAttribute('data-target');

    /* Make changes */
    if($(icon).hasClass('arrow-down')) { // show
      // if another one open, close
      if(this.faq_opened.id != faq_clicked && this.faq_opened.id != "") {
        this.hideFaq(this.faq_opened.icon, this.faq_opened.title);
      }

      this.showFaq(icon, title);
      this.faq_opened = { id: faq_clicked, icon: icon, title: title };
    }
    else { // hide
      this.hideFaq(icon, title);
      this.faq_opened = { id: "", icon: "", title: "" };
    }
  }

}
