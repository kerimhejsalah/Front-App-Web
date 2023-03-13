import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpatientRoutingModule } from './addpatient-routing.module';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [AddPatientComponent],
  imports: [
    CommonModule,
    AddpatientRoutingModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AddpatientModule { }
