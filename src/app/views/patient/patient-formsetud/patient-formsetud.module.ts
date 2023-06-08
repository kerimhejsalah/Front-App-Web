import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientFormsetudRoutingModule } from './patient-formsetud-routing.module';
import { PatientFormsetudComponent } from './patient-formsetud/patient-formsetud.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [PatientFormsetudComponent],
  imports: [
    CommonModule,
    PatientFormsetudRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    TranslateModule
  ]
})
export class PatientFormsetudModule { }
