import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { RoutesComponent } from './routes/routes.component';


@NgModule({
  declarations: [RoutesComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class RoutesModule { }
