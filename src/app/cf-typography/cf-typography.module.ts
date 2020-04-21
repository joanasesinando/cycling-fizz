import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CfTypographyRoutingModule } from './cf-typography-routing.module';
import { CfTypographyComponent } from './cf-typography/cf-typography.component';


@NgModule({
  declarations: [CfTypographyComponent],
  imports: [
    CommonModule,
    CfTypographyRoutingModule
  ]
})
export class CfTypographyModule { }
