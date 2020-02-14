import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedRoutingModule } from './shared-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalLoginRegisterComponent } from './navbar/modal-login-register/modal-login-register.component';
import { ModalLoginComponent } from './navbar/modal-login/modal-login.component';
import { ModalRegisterComponent } from './navbar/modal-register/modal-register.component';
import { BtnOutlineComponent } from './btn-outline/btn-outline.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Svg404Component } from './page-not-found/svg404/svg404.component';
import { Text404Component } from './page-not-found/text404/text404.component';
import { BtnFloatingComponent } from './btn-floating/btn-floating.component';
import { CreditsComponent } from './credits/credits.component';
import { BannerComponent } from './banner/banner.component';
import { CreditsAccordionComponent } from './credits/credits-accordion/credits-accordion.component';
import { BadgeComponent } from './badge/badge.component';
import { NewsletterSubscribeComponent } from './newsletter-subscribe/newsletter-subscribe.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FormsModule } from '@angular/forms';
import {MustMatchDirective} from "../_helpers/must-match.directive";


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ModalLoginRegisterComponent,
    ModalLoginComponent,
    ModalRegisterComponent,
    BtnOutlineComponent,
    PageNotFoundComponent,
    Svg404Component,
    Text404Component,
    BtnFloatingComponent,
    CreditsComponent,
    BannerComponent,
    CreditsAccordionComponent,
    BadgeComponent,
    NewsletterSubscribeComponent,
    ComingSoonComponent,
    MustMatchDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    TranslateModule,
    FormsModule
  ],
    exports: [
        NavbarComponent,
        FooterComponent,
        BtnOutlineComponent,
        BtnFloatingComponent,
        CreditsComponent,
        BannerComponent,
        PageNotFoundComponent,
        NewsletterSubscribeComponent
    ]
})
export class SharedModule { }
