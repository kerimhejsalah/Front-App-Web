import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpatientRoutingModule } from './addpatient-routing.module';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AddPatientComponent],
  imports: [
    CommonModule,
    AddpatientRoutingModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class AddpatientModule { }
