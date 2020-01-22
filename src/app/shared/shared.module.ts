import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedRoutingModule } from './shared-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalLoginRegisterComponent } from './header/modal-login-register/modal-login-register.component';
import { ModalLoginComponent } from './header/modal-login/modal-login.component';
import { ModalRegisterComponent } from './header/modal-register/modal-register.component';
import { BtnOutlineComponent } from './btn-outline/btn-outline.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Svg404Component } from './page-not-found/svg404/svg404.component';
import { Text404Component } from './page-not-found/text404/text404.component';
import { BtnFloatingComponent } from './btn-floating/btn-floating.component';
import { CreditsComponent } from './credits/credits.component';
import { BannerComponent } from './banner/banner.component';
import { CreditsAccordionComponent } from './credits/credits-accordion/credits-accordion.component';


@NgModule({
  declarations: [
    HeaderComponent,
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
    CreditsAccordionComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BtnOutlineComponent,
    BtnFloatingComponent
  ]
})
export class SharedModule { }
