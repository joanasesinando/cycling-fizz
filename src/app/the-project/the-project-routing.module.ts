import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheProjectComponent } from './the-project/the-project.component';


const routes: Routes = [
    {
        path: '',
        component: TheProjectComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TheProjectRoutingModule { }
