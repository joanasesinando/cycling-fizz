import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MustMatchDirective } from "../_helpers/must-match.directive";
import { NgInitDirective } from '../_directives/ng-init.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BadgeTextComponent } from './badges/badge-text/badge-text.component';
import { BadgeDotComponent } from './badges/badge-dot/badge-dot.component';
import { BannerComponent } from './banner/banner.component';
import { BtnOutlineComponent } from './buttons/btn-outline/btn-outline.component';
import { BtnFloatingComponent } from './buttons/btn-floating/btn-floating.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CreditsComponent } from './credits/credits.component';
import { CreditsAccordionComponent } from './credits/credits-accordion/credits-accordion.component';
import { DialogComponent } from './dialog/dialog.component';
import { FooterComponent } from './footer/footer.component';
import { GoTopComponent } from './go-top/go-top.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsletterSubscribeComponent } from './newsletter-subscribe/newsletter-subscribe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SwitchComponent } from './switch/switch.component';

import { ModalLoginRegisterComponent } from './navbar/modal-login-register/modal-login-register.component';
import { ModalLoginComponent } from './navbar/modal-login/modal-login.component';
import { ModalRegisterComponent } from './navbar/modal-register/modal-register.component';
import { ModalCompleteRegistrationComponent } from './navbar/modal-complete-registration/modal-complete-registration.component';

import {
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbIconModule,
    NbLayoutModule,
    NbToggleModule,
    NbUserModule,
    NbContextMenuModule
} from '@nebular/theme';



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
    NgInitDirective,
    SwitchComponent,
    CheckboxComponent,
    DialogComponent
  ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        FontAwesomeModule,
        TranslateModule,
        FormsModule,
        NbButtonModule,
        NbIconModule,
        ReactiveFormsModule,
        NbLayoutModule,
        NbToggleModule,
        NbCheckboxModule,
        NbCardModule,
        NbUserModule,
        NbContextMenuModule
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
        NgInitDirective,
        SwitchComponent,
        CheckboxComponent,
        DialogComponent
    ]
})
export class SharedModule { }
