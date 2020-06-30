import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { FilterGroupComponent } from './filters/filter-group/filter-group.component';
import { FiltersComponent } from './filters/filters.component';
import { MapElementComponent } from './map-element/map-element.component';
import { MapCardSmallComponent } from './cards/map-card-small/map-card-small.component';
import { MapCardInfoComponent } from './cards/map-card-info/map-card-info.component';
import { MapCardNotesComponent } from './cards/map-card-notes/map-card-notes.component';
import { MapBikelaneComponent } from './map-element/map-bikelane/map-bikelane.component';
import { MapCardsCheckboxComponent } from './cards/map-card-info/map-cards-checkbox/map-cards-checkbox.component';
import { MapParkingComponent } from './map-element/map-parking/map-parking.component';
import { MapStoreComponent } from './map-element/map-store/map-store.component';
import { MapGalleryComponent } from './map-element/map-gallery/map-gallery.component';
import { MapCommentsComponent } from './map-element/map-comments/map-comments.component';
import { MapboxComponent } from './mapbox/mapbox.component';

import {
    NbCardModule,
    NbChatModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbPopoverModule,
    NbSelectModule,
    NbToggleModule,
    NbUserModule,
    NbInputModule,
    NbButtonModule, NbSidebarModule, NbIconModule,
} from '@nebular/theme';


@NgModule({
  declarations: [
      MapComponent,
      SearchComponent,
      FilterGroupComponent,
      MapBikelaneComponent,
      MapCardsCheckboxComponent,
      MapParkingComponent,
      MapStoreComponent,
      MapGalleryComponent,
      MapCommentsComponent,
      MapboxComponent,
      FiltersComponent,
      MapElementComponent,
      MapCardSmallComponent,
      MapCardInfoComponent,
      MapCardNotesComponent
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
        NbButtonModule,
        NbSidebarModule,
        FormsModule,
        TranslateModule,
        NbIconModule
    ]
})
export class MapModule { }
