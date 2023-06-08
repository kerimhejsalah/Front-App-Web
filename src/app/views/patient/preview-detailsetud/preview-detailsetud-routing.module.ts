import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewDetailsetudComponent } from './preview-detailsetud/preview-detailsetud.component';

const routes: Routes = [
  {path:'',component:PreviewDetailsetudComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewDetailsetudRoutingModule { }
