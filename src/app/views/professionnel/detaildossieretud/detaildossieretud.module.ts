import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetaildossieretudRoutingModule } from './detaildossieretud-routing.module';
import { DetaildossieretudComponent } from './detaildossieretud/detaildossieretud.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {TranslateModule} from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DetaildossieretudComponent],
  imports: [
    CommonModule,
    DetaildossieretudRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    TranslateModule,

  ]
})
export class DetaildossieretudModule { }
