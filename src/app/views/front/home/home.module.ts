import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import {TranslateModule} from '@ngx-translate/core';
import { YouTubePlayerModule } from "@angular/youtube-player";
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    TranslateModule,
    YouTubePlayerModule,
  ]
})
export class HomeModule { }
