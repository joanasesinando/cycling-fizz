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

import {NbCheckboxModule, NbLayoutModule, NbToggleModule} from '@nebular/theme';

@NgModule({
  declarations: [
      MapComponent,
      SearchComponent,
      FilterGroupComponent,
      MapQuickFilterToggleComponent,
      MapFilterToggleComponent,
      MapFilterCheckboxComponent,
      MapModalsComponent
    ],
    imports: [
        CommonModule,
        MapRoutingModule,
        FontAwesomeModule,
        SharedModule,
        NbLayoutModule,
        NbToggleModule,
        NbCheckboxModule
    ]
})
export class MapModule { }
