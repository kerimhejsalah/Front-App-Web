import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {TranslateModule} from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import { DossieretudRoutingModule } from './dossieretud-routing.module';
import { DossieretudComponent } from './dossieretud/dossieretud.component';


@NgModule({
  declarations: [DossieretudComponent],
  imports: [
    CommonModule,
    DossieretudRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    TranslateModule,
    MatCardModule
  ]
})
export class DossieretudModule { }
