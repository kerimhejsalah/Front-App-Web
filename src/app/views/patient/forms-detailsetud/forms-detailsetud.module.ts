import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsDetailsetudRoutingModule } from './forms-detailsetud-routing.module';
import { FormsDetailsetudComponent } from './forms-detailsetud/forms-detailsetud.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { Ng5SliderModule } from 'ng5-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [FormsDetailsetudComponent],
  imports: [
    CommonModule,
    FormsDetailsetudRoutingModule,
    MatRadioModule,
    MatSelectModule,
    Ng5SliderModule,
    MatCheckboxModule,
    ScrollingModule,
    TranslateModule
  ]
})
export class FormsDetailsetudModule { }
