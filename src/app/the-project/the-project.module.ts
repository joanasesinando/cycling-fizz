import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheProjectRoutingModule } from './the-project-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { TheProjectComponent } from './the-project/the-project.component';
import { ImgIdeaComponent } from './img-idea/img-idea.component';
import { ImgGuyCyclingComponent } from './img-guy-cycling/img-guy-cycling.component';
import { ImgGirlWorkingComponent } from './img-girl-working/img-girl-working.component';



@NgModule({
  declarations: [TheProjectComponent, ImgIdeaComponent, ImgGuyCyclingComponent, ImgGirlWorkingComponent],
  imports: [
    CommonModule,
    TheProjectRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class TheProjectModule { }
