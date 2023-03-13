import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from "@angular/animations";
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Patient } from 'src/app/views/interfaces/patient.interface';
import { AuthPatientService } from 'src/app/views/services/patient/auth-patient.service';
import{UpdProfilPatientService} from '../../views/services/patient/upd-profil-patient.service'
import { LoaderService } from 'src/app/views/services/loader/loader.service';
import {TranslationService} from '../../translation.service';
import { DoctorsService } from 'src/app/views/services/patient/doctors.service';
import { SidebarOpenAnimation, SidebarCloseAnimation } from "./animations";
const animationParams = {
  menuWidth: "250px",
  animationStyle: "250ms ease"
};
@Component({
  selector: 'app-patient-layout',
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.scss'],
  animations: [
    trigger("sideMenu", [
      transition(":enter", [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams
          }
        })
      ]),
      transition(":leave", [
        useAnimation(SidebarCloseAnimation, {
          params: {
            ...animationParams
          }
        })
      ])
    ])
  ]
})
export class PatientLayoutComponent implements OnInit {
  isOpen = false;
fullname:Patient
id:any
patient:Patient
dataPatient={
  name:'',
  lastname:'',
  email:'',
  birthday:0,
  tel:0,
  id:'',
  adresse:'',
  ssn:'',
  gender:'',
  photo:'',
  archived:'',
  account_state:'',
  added_date:'',

}
languageSelect:any;
currentLang = 'fr';
languages=[
  {key :'fr',displayValue:'English'},
  {key :'en',displayValue:'Français'},


]
invts:any;
  constructor( public loaderService: LoaderService,public  updateservice:UpdProfilPatientService,private router:Router,private  authPat:AuthPatientService,public doctorsService: DoctorsService,public translationService: TranslationService) {

    this.id= localStorage.getItem('id')
    this.patient=this.authPat.getUsername()
   
    this.updateservice.getPatient(this.id).subscribe((response=>{
     this.dataPatient.name=response.name;
     this.dataPatient.lastname=response.lastname;
     this.dataPatient.email=response.email;
     this.dataPatient.photo=response.photo;
      
      this.dataPatient = response}))
      if(localStorage.getItem('langauage')==null){
        this.languageSelect='fr'
      }else{
        this.languageSelect=localStorage.getItem('langauage')}
  }

  ngOnInit(): void {
    this.fullname=this.authPat.getUsername();
    this.doctorsService.refreshNeeded$.subscribe((res)=>{
      this.listInvit()
    })
  }
  listInvit(){
    this.doctorsService.getInvts(this.id).subscribe((response)=>{
      this.invts=response
      /*   console.log(response)   */
         })
    
  }
  onLangChange(currentLang: string) {
    localStorage.setItem('langauage',currentLang)
    this.translationService.useLang(currentLang);
  }
  logout(){
    localStorage.removeItem('token_Pat')
    this.router.navigate(['/'])
  }

  numberInvts(){
    //    let keys = Object.keys(this.invts);
    // let len = this.keys.length;
    // return len
    
    if (this.invts) {
      let keys = Object.keys(this.invts);
      let len = keys.length;
      return len
    } 
    
    
    
      }


}
