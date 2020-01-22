import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrafficRulesRoutingModule } from './traffic-rules-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { TrafficRulesComponent } from './traffic-rules/traffic-rules.component';


@NgModule({
  declarations: [TrafficRulesComponent],
  imports: [
    CommonModule,
    TrafficRulesRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class TrafficRulesModule { }
