import { Component, OnInit } from '@angular/core';
import { AuthProfessionnelService } from '../../services/professionnel/auth-professionnel.service';
import { ActivatedRoute } from '@angular/router';
import { AuthPatientService } from '../../services/patient/auth-patient.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor( private AuthProfessionnel: AuthProfessionnelService,private router: ActivatedRoute, private AuthPatient: AuthPatientService,) { }

  forgot = {

    email: ''

  };

  emailAlert = false;

  showForm = true;
  type :any;
  ngOnInit(): void {
    this.type =  this.router.snapshot.paramMap.get('path');
  /*   console.log(this.type) */
  }

  response:any;
  forgotPassword(){
if(this.type=="pat"){
  this.AuthPatient.forgotPassword(this.forgot).subscribe(

    res=>{
      this.response = res;
     if(this.response.etat === 'invalid'){
      this.emailAlert = true;
      setTimeout(() => {
        this.emailAlert = false;
      }, 3000);
     }else{
       this.showForm = false;
     }
    },
    err=>{

      if(localStorage.getItem("langauage")==='fr'){
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'S il vous plait inserer un mail valide',
          showConfirmButton: false,
          timer: 2000
        })
       }else{
  
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Please insert a valid mail',
            showConfirmButton: false,
            timer: 2000
          })
      
        }
    }

  );
}else{
    this.AuthProfessionnel.forgotPassword(this.forgot).subscribe(

      res=>{
        this.response = res;
       if(this.response.etat === 'invalid'){
        this.emailAlert = true;
        setTimeout(() => {
          this.emailAlert = false;
        }, 3000);
       }else{
         this.showForm = false;
       }
      },
      err=>{

        
      }

    );}

  }


}
