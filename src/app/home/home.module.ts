import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { FeaturesComponent } from './features/features.component';
import { FCardComponent } from './features/f-card/f-card.component';
import { BlogComponent } from './blog/blog.component';
import { BCardComponent } from './blog/b-card/b-card.component';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [HomeComponent, IntroComponent, FeaturesComponent, FCardComponent, BlogComponent, BCardComponent, QuoteComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
