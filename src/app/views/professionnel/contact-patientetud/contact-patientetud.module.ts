import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPatientetudRoutingModule } from './contact-patientetud-routing.module';
import { ContactPatientetudComponent } from './contact-patientetud/contact-patientetud.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ContactPatientetudComponent],
  imports: [
    CommonModule,
    ContactPatientetudRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    MatCardModule
  ]
})
export class ContactPatientetudModule { }
