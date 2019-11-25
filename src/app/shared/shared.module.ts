import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalLoginRegisterComponent } from './header/modal-login-register/modal-login-register.component';
import { ModalLoginComponent } from './header/modal-login/modal-login.component';
import { ModalRegisterComponent } from './header/modal-register/modal-register.component';
import { BtnOutlineComponent } from './btn-outline/btn-outline.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, ModalLoginRegisterComponent, ModalLoginComponent, ModalRegisterComponent, BtnOutlineComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
