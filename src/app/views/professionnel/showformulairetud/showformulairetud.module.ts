import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowformulairetudRoutingModule } from './showformulairetud-routing.module';
import { ShowformulairetudComponent } from './showformulairetud/showformulairetud.component';

import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { Ng5SliderModule } from 'ng5-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ToastrModule } from 'ngx-toastr';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ShowformulairetudComponent],
  imports: [
    CommonModule,
    ShowformulairetudRoutingModule,
    MatRadioModule,
    MatSelectModule,
    Ng5SliderModule,
    MatCheckboxModule,
    ToastrModule.forRoot(),
    ScrollingModule,
    MatCardModule
  ]
})
export class ShowformulairetudModule { }
