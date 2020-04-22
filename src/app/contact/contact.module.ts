import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { ContactComponent } from './contact/contact.component';
import { ImgEmailComponent } from './img-email/img-email.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [ContactComponent, ImgEmailComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class ContactModule { }
