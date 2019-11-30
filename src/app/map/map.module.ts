import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map/map.component';
import { FilterSwitchComponent } from './map/modal-filter/filter-switch/filter-switch.component';
import { SearchComponent } from './search/search.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';
import { ModalFilterComponent } from './map/modal-filter/modal-filter.component';
import { FilterCheckboxComponent } from './filter-checkbox/filter-checkbox.component';
import { FilterGroupComponent } from './map/modal-filter/filter-group/filter-group.component';

@NgModule({
  declarations: [MapComponent, FilterSwitchComponent, SearchComponent, ModalFilterComponent, FilterCheckboxComponent, FilterGroupComponent],
    imports: [
        CommonModule,
        MapRoutingModule,
        FontAwesomeModule,
        SharedModule
    ]
})
export class MapModule { }
