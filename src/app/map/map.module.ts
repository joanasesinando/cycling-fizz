import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map/map.component';
import { FilterSwitchComponent } from './filter-switch/filter-switch.component';
import { SearchComponent } from './search/search.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MapComponent, FilterSwitchComponent, SearchComponent],
    imports: [
        CommonModule,
        MapRoutingModule,
        FontAwesomeModule
    ]
})
export class MapModule { }
