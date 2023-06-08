import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowformulairetudComponent } from './showformulairetud/showformulairetud.component';
const routes: Routes = [
  {path:'',component:ShowformulairetudComponent}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowformulairetudRoutingModule { }
