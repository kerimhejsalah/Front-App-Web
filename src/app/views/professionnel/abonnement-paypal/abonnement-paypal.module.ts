import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbonnementPaypalRoutingModule } from './abonnement-paypal-routing.module';
import { AbonnementPaypalComponent } from './abonnement-paypal/abonnement-paypal.component';

import { NgxPaginationModule } from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [AbonnementPaypalComponent],
  imports: [
    CommonModule,
    AbonnementPaypalRoutingModule,
    MatTooltipModule,
    NgxPaginationModule,
    TranslateModule,
    MatCardModule
  ]
})
export class AbonnementPaypalModule { }
