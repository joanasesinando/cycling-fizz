import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CfTypographyComponent} from './cf-typography/cf-typography.component';


const routes: Routes = [
  {
    path: '',
    component: CfTypographyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CfTypographyRoutingModule { }
