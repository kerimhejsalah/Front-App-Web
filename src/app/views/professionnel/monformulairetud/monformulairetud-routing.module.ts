import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonformulairetudComponent } from './monformulairetud/monformulairetud.component';
const routes: Routes = [
  {path:'',component:MonformulairetudComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonformulairetudRoutingModule { }
