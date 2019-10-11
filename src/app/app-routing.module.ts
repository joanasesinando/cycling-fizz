import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then(mod => mod.MapModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
