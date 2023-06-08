import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DossieretudComponent } from './dossieretud/dossieretud.component';
const routes: Routes = [
  {path:'',component:DossieretudComponent}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DossieretudRoutingModule { }
