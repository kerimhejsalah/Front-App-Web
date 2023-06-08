import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsDetailsetudComponent } from './forms-detailsetud/forms-detailsetud.component';
const routes: Routes = [
  {path:'',component:FormsDetailsetudComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsDetailsetudRoutingModule { }
