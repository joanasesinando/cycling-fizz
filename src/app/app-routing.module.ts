import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';
import { CreditsComponent } from './shared/credits/credits.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'the-project',
    loadChildren: () => import('./the-project/the-project.module').then(mod => mod.TheProjectModule),
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(mod => mod.AboutUsModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule),
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then(mod => mod.MapModule),
  },
  {
    path: 'traffic-rules',
    loadChildren: () => import('./traffic-rules/traffic-rules.module').then(mod => mod.TrafficRulesModule),
  },
  {
    path: 'routes',
    loadChildren: () => import('./routes/routes.module').then(mod => mod.RoutesModule),
  },
  {
    path: 'beginner',
    loadChildren: () => import('./beginner/beginner.module').then(mod => mod.BeginnerModule),
  },
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(mod => mod.HomepageModule),
  },
  {
    path: 'credits',
    component: CreditsComponent,
  },
  {
    path: 'coming-soon/:page',
    component: ComingSoonComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: 'typography',
    loadChildren: () => import('./cf-typography/cf-typography.module').then(mod => mod.CfTypographyModule),
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
