import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPatientetudComponent } from './contact-patientetud/contact-patientetud.component';
const routes: Routes = [
  {path:'',component:ContactPatientetudComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactPatientetudRoutingModule { }
