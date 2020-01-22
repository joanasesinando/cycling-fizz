import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrafficRulesComponent} from './traffic-rules/traffic-rules.component';


const routes: Routes = [
  {
    path: '',
    component: TrafficRulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrafficRulesRoutingModule { }
