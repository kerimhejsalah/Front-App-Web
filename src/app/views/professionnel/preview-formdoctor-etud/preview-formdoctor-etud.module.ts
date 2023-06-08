
import { PreviewFormdoctorEtudRoutingModule } from './preview-formdoctor-etud-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { Ng5SliderModule } from 'ng5-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {TranslateModule} from '@ngx-translate/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PreviewFormdoctorEtudComponent } from './preview-formdoctor-etud/preview-formdoctor-etud.component';
@NgModule({
  declarations: [PreviewFormdoctorEtudComponent],
  imports: [
    CommonModule,
    PreviewFormdoctorEtudRoutingModule,
    MatRadioModule,
    MatSelectModule,
    Ng5SliderModule,
    MatCheckboxModule,
    ScrollingModule,
    TranslateModule,
    MatTooltipModule,
  ]
})
export class PreviewFormdoctorEtudModule { }
