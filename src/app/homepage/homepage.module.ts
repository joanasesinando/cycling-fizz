import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { HomepageComponent } from './homepage/homepage.component';
import { CoverComponent } from './cover/cover.component';
import { FeaturesComponent } from './features/features.component';
import { FCardComponent } from './features/f-card/f-card.component';
import { BlogComponent } from './blog/blog.component';
import { BCardComponent } from './blog/b-card/b-card.component';
import { QuoteComponent } from './quote/quote.component';
import { TranslateModule } from '@ngx-translate/core';
import { BCarouselComponent } from './blog/b-carousel/b-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [HomepageComponent, CoverComponent, FeaturesComponent, FCardComponent, BlogComponent, BCardComponent, QuoteComponent, BCarouselComponent],
    imports: [
        CommonModule,
        HomepageRoutingModule,
        FontAwesomeModule,
        SharedModule,
        TranslateModule,
        SlickCarouselModule,
    ]
})
export class HomepageModule { }
