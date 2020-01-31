import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class ContactModule { }
