import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {CreditsComponent} from './shared/credits/credits.component';


const routes: Routes = [
  {
    path: 'the-project',
    loadChildren: () => import('./the-project/the-project.module').then(mod => mod.TheProjectModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(mod => mod.AboutUsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then(mod => mod.MapModule)
  },
  {
    path: 'traffic-rules',
    loadChildren: () => import('./traffic-rules/traffic-rules.module').then(mod => mod.TrafficRulesModule)
  },
  {
    path: 'routes',
    loadChildren: () => import('./routes/routes.module').then(mod => mod.RoutesModule)
  },
  {
    path: 'beginner',
    loadChildren: () => import('./beginner/beginner.module').then(mod => mod.BeginnerModule)
  },
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(mod => mod.HomepageModule)
  },
  {
    path: 'credits',
    component: CreditsComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: "/404",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
