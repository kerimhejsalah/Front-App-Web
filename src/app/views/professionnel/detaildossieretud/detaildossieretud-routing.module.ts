import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetaildossieretudComponent } from './detaildossieretud/detaildossieretud.component';
const routes: Routes = [  {path:'',component:DetaildossieretudComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetaildossieretudRoutingModule { }
