import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { ModalFilterComponent } from './map/modal-filter/modal-filter.component';
import { FilterCheckboxComponent } from './filter-checkbox/filter-checkbox.component';
import { FilterGroupComponent } from './map/modal-filter/filter-group/filter-group.component';
import {NbLayoutModule, NbToggleModule} from '@nebular/theme';
import { MapQuickFilterToggleComponent } from './map/map-quick-filter-toggle/map-quick-filter-toggle.component';
import { MapFilterToggleComponent } from './map/modal-filter/map-filter-toggle/map-filter-toggle.component';

@NgModule({
  declarations: [MapComponent, SearchComponent, ModalFilterComponent, FilterCheckboxComponent, FilterGroupComponent, MapQuickFilterToggleComponent, MapFilterToggleComponent],
    imports: [
        CommonModule,
        MapRoutingModule,
        FontAwesomeModule,
        SharedModule,
        NbLayoutModule,
        NbToggleModule
    ]
})
export class MapModule { }
