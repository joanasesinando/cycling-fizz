import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesComponent} from './routes/routes.component';


const routes: Routes = [
  {
    path: '',
    component: RoutesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
