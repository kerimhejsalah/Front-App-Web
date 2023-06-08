import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewFormdoctorEtudComponent } from './preview-formdoctor-etud/preview-formdoctor-etud.component';
const routes: Routes = [
  {path:'',component:PreviewFormdoctorEtudComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewFormdoctorEtudRoutingModule { }
