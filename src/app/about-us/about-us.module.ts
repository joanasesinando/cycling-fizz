import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

import { AboutUsComponent } from './about-us/about-us.component';
import { TeamMemberComponent } from './team-member/team-member.component';



@NgModule({
  declarations: [AboutUsComponent, TeamMemberComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class AboutUsModule { }
