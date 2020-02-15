import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { FilterGroupComponent } from './map/map-modals/filter-group/filter-group.component';
import { MapQuickFilterToggleComponent } from './map/map-quick-filter-toggle/map-quick-filter-toggle.component';
import { MapFilterToggleComponent } from './map/map-modals/map-filter-toggle/map-filter-toggle.component';
import { MapFilterCheckboxComponent } from './map/map-modals/map-filter-checkbox/map-filter-checkbox.component';
import { MapModalsComponent } from './map/map-modals/map-modals.component';

import {
    NbCardModule,
    NbChatModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbPopoverModule,
    NbSelectModule,
    NbToggleModule,
    NbUserModule,
    NbInputModule, NbButtonModule
} from '@nebular/theme';
import { MapCardsBikelaneComponent } from './map/map-modals/map-cards-bikelane/map-cards-bikelane.component';
import { MapCardsCheckboxComponent } from './map/map-modals/map-cards-checkbox/map-cards-checkbox.component';
import { MapCardsParkingComponent } from './map/map-modals/map-cards-parking/map-cards-parking.component';
import { MapCardsStoreComponent } from './map/map-modals/map-cards-store/map-cards-store.component';
import { MapGalleryComponent } from './map/map-modals/map-gallery/map-gallery.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { MapCommentsComponent } from './map/map-modals/map-comments/map-comments.component';
import { MapTagsComponent } from './map/map-modals/map-tags/map-tags.component';

@NgModule({
  declarations: [
      MapComponent,
      SearchComponent,
      FilterGroupComponent,
      MapQuickFilterToggleComponent,
      MapFilterToggleComponent,
      MapFilterCheckboxComponent,
      MapModalsComponent,
      MapCardsBikelaneComponent,
      MapCardsCheckboxComponent,
      MapCardsParkingComponent,
      MapCardsStoreComponent,
      MapGalleryComponent,
      MapCommentsComponent,
      MapTagsComponent
    ],
    imports: [
        CommonModule,
        MapRoutingModule,
        FontAwesomeModule,
        SharedModule,
        NbLayoutModule,
        NbToggleModule,
        NbCheckboxModule,
        NbCardModule,
        SlickCarouselModule,
        NbUserModule,
        NbChatModule,
        NbPopoverModule,
        NbSelectModule,
        NbInputModule,
        NbButtonModule
    ]
})
export class MapModule { }
