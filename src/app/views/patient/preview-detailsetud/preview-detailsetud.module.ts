import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewDetailsetudRoutingModule } from './preview-detailsetud-routing.module';
import { PreviewDetailsetudComponent } from './preview-detailsetud/preview-detailsetud.component';

import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { Ng5SliderModule } from 'ng5-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [PreviewDetailsetudComponent],
  imports: [
    CommonModule,
    PreviewDetailsetudRoutingModule,
    MatRadioModule,
    MatSelectModule,
    Ng5SliderModule,
    MatCheckboxModule,
    ScrollingModule
  ]
})
export class PreviewDetailsetudModule { }
