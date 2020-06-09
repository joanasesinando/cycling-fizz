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
import { BtnOutlineComponent } from './buttons/btn-outline/btn-outline.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BtnFloatingComponent } from './buttons/btn-floating/btn-floating.component';
import { CreditsComponent } from './credits/credits.component';
import { BannerComponent } from './banner/banner.component';
import { CreditsAccordionComponent } from './credits/credits-accordion/credits-accordion.component';
import { NewsletterSubscribeComponent } from './newsletter-subscribe/newsletter-subscribe.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MustMatchDirective} from "../_helpers/must-match.directive";
import { ModalCompleteRegistrationComponent } from './navbar/modal-complete-registration/modal-complete-registration.component';
import {NbButtonModule, NbIconModule} from '@nebular/theme';
import { GoTopComponent } from './go-top/go-top.component';
import { BadgeTextComponent } from './badges/badge-text/badge-text.component';
import { BadgeDotComponent } from './badges/badge-dot/badge-dot.component';
import {NgInitDirective} from '../_directives/ng-init.directive';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ModalLoginRegisterComponent,
    ModalLoginComponent,
    ModalRegisterComponent,
    BtnOutlineComponent,
    PageNotFoundComponent,
    BtnFloatingComponent,
    CreditsComponent,
    BannerComponent,
    CreditsAccordionComponent,
    BadgeTextComponent,
    NewsletterSubscribeComponent,
    ComingSoonComponent,
    MustMatchDirective,
    ModalCompleteRegistrationComponent,
    GoTopComponent,
    BadgeDotComponent,
    NgInitDirective
  ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        FontAwesomeModule,
        TranslateModule,
        FormsModule,
        NbButtonModule,
        NbIconModule,
        ReactiveFormsModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        BtnOutlineComponent,
        BtnFloatingComponent,
        CreditsComponent,
        BannerComponent,
        PageNotFoundComponent,
        NewsletterSubscribeComponent,
        GoTopComponent,
        BadgeTextComponent,
        NgInitDirective
    ]
})
export class SharedModule { }
