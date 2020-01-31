import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheProjectRoutingModule } from './the-project-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { TheProjectComponent } from './the-project/the-project.component';



@NgModule({
  declarations: [TheProjectComponent],
  imports: [
    CommonModule,
    TheProjectRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class TheProjectModule { }
