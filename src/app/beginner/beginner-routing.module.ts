import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeginnerComponent} from './beginner/beginner.component';


const routes: Routes = [
  {
    path: '',
    component: BeginnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeginnerRoutingModule { }
