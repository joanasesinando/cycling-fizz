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
      fromUrl: 'https://www.freepik.com/free-vector/outdoor-activities-landing-page-template_4862843.htm',
      circle: true
    }
  ];

  navbar = [
    {
      img: '../../../../assets/images/navbar/icons/blog.svg',
      by: 'flaticon',
      byUrl: 'https://www.flaticon.com',
      from: 'www.freepik.com',
      fromUrl: 'https://www.freepik.com/free-icon/blogger-logo_749187.htm#query=blog&position=6',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/calendar.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/calendar_833593',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/idea.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/idea_107788',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/envelope.svg',
      by: 'Those Icons',
      byUrl: 'https://www.flaticon.com/authors/those-icons',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/envelope_481658',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/portugues.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/portugal_197463',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/english.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/united-kingdom_197374',
      circle: false
    },
    {
      img: '../../../../assets/images/navbar/icons/français.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/france_197560',
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
      fromUrl: 'https://www.vecteezy.com/vector-art/266226-girl-cycling-around-at-beach-vector-flat-character',
      circle: true
    },
    {
      img: '../../../../assets/images/homepage/features/icons/map.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/map_854878',
      circle: false
    },
    {
      img: '../../../../assets/images/homepage/features/icons/traffic-light.svg',
      by: 'DinosoftLabs',
      byUrl: 'https://www.flaticon.com/authors/dinosoftlabs',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/traffic-light_439882',
      circle: false
    },
    {
      img: '../../../../assets/images/homepage/features/icons/route.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/signpost_854875',
      circle: false
    },
    {
      img: '../../../../assets/images/homepage/features/icons/beginner.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/confused_1698558',
      circle: false
    },
    {
      img: '../../../../assets/images/homepage/features/icons/forum.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/chat_1989849',
      circle: false
    },
    {
      img: '../../../../assets/images/homepage/features/icons/calendar.svg',
      by: 'Vectors Market',
      byUrl: 'https://www.flaticon.com/authors/vectors-market',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/calendar_609409',
      circle: false
    }
  ];

  map = [
    {
      img: '../../../../assets/images/map/icons/bikelane.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/racing_383515',
      circle: false
    },
    {
      img: '../../../../assets/images/map/icons/parking.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/bike-parking_382315',
      circle: false
    },
    {
      img: '../../../../assets/images/map/icons/store.svg',
      by: 'Smashicons',
      byUrl: 'https://www.flaticon.com/authors/smashicons',
      from: 'www.flaticon.com',
      fromUrl: 'https://www.flaticon.com/free-icon/bike-shop_1818802',
      circle: false
    }
  ];

  about = [
    {
      img: '../../../../assets/images/the-project/idea.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.freepik.com',
      fromUrl: 'https://www.freepik.com/free-vector/brainstorming-concept-landing-page_5754890.htm',
      circle: false
    },
    {
      img: '../../../../assets/images/the-project/girl-working.svg',
      by: 'pikisuperstar',
      byUrl: 'https://www.freepik.com/pikisuperstar',
      from: 'www.freepik.com',
      fromUrl: 'https://www.freepik.com/free-vector/programmer-desktop-working-illustration_5694682.htm',
      circle: false
    },
    {
      img: '../../../../assets/images/the-project/guy-cycling.svg',
      by: 'freepik',
      byUrl: 'https://www.freepik.com',
      from: 'www.freepik.com',
      fromUrl: 'https://www.freepik.com/free-vector/flat-delivery-boy-bike-background_4424625.htm',
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
