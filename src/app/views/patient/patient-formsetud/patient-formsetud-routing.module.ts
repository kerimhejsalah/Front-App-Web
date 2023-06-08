import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientFormsetudComponent } from './patient-formsetud/patient-formsetud.component';
const routes: Routes = [
  {path:'',component:PatientFormsetudComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientFormsetudRoutingModule { }
