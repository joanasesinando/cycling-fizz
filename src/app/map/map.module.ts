import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { ModalFilterComponent } from './map/modal-filter/modal-filter.component';
import { FilterGroupComponent } from './map/modal-filter/filter-group/filter-group.component';
import { MapQuickFilterToggleComponent } from './map/map-quick-filter-toggle/map-quick-filter-toggle.component';
import { MapFilterToggleComponent } from './map/modal-filter/map-filter-toggle/map-filter-toggle.component';
import { MapFilterCheckboxComponent } from './map/modal-filter/map-filter-checkbox/map-filter-checkbox.component';

import {NbCheckboxModule, NbLayoutModule, NbToggleModule} from '@nebular/theme';

@NgModule({
  declarations: [
      MapComponent,
      SearchComponent,
      ModalFilterComponent,
      FilterGroupComponent,
      MapQuickFilterToggleComponent,
      MapFilterToggleComponent,
      MapFilterCheckboxComponent
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
