import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonformulairetudRoutingModule } from './monformulairetud-routing.module';
import { MonformulairetudComponent } from './monformulairetud/monformulairetud.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [MonformulairetudComponent],
  imports: [
    CommonModule,
    MonformulairetudRoutingModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    NgxPaginationModule,
    TranslateModule,
    MatTooltipModule
  ]
})
export class MonformulairetudModule { }
