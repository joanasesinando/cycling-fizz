import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeginnerRoutingModule } from './beginner-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { BeginnerComponent } from './beginner/beginner.component';


@NgModule({
  declarations: [BeginnerComponent],
  imports: [
    CommonModule,
    BeginnerRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class BeginnerModule { }
