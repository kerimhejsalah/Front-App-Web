import { Component, OnInit } from '@angular/core';
import { AuthProfessionnelService } from '../../services/professionnel/auth-professionnel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthPatientService } from '../../services/patient/auth-patient.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  id: any;
 token: any;
 type: any;
 passwordType:string ="password";
 iconType:string = "visibility";
 passwordShow:boolean = false;
 loginUserData = {

 
  password: '',
  confirm: ''

};
passwordAlert = false;
  constructor(private AuthProfessionnel: AuthProfessionnelService,private route: Router ,private router: ActivatedRoute, private AuthPatient: AuthPatientService, ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.token = this.router.snapshot.paramMap.get('token');
    this.type = this.router.snapshot.paramMap.get('type');
   /*  console.log(this.type) */
  }
  success = false;

 reset(){
  if(this.loginUserData.password !== this.loginUserData.confirm){
    if(localStorage.getItem("langauage")==='fr'){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'S il vous plait inserer un mot de passe valide',
        showConfirmButton: false,
        timer: 2000
      })
     }else{

        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Please insert a valid password',
          showConfirmButton: false,
          timer: 2000
        })
    
      }
    this.passwordAlert = true;

  }else{
    if(this.type=="prof"){
 
    this.passwordAlert = false;
    this.AuthProfessionnel.resetPassword(this.id, this.token , this.loginUserData).subscribe(
      res=>{
        if(localStorage.getItem("langauage")==='fr'){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mot de passe a été modifié',
            showConfirmButton: false,
            timer: 2000
          })
          this.route.navigate(['/']);}else{

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Password has been changed',
              showConfirmButton: false,
              timer: 2000
            })
            this.route.navigate(['/']);
          }
      },
      err=>{
        if(localStorage.getItem("langauage")==='fr'){
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'S il vous plait inserer un mot de passe valide',
            showConfirmButton: false,
            timer: 2000
          })
          this.route.navigate(['/']);}else{

            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Please insert a valid password',
              showConfirmButton: false,
              timer: 2000
            })
            this.route.navigate(['/']);
          }
    
        
      }
    )}else{
      this.AuthPatient.resetPassword(this.id, this.token , this.loginUserData).subscribe(
        
        res=>{
          this.success = true;
          if(localStorage.getItem("langauage")==='fr'){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mot de passe a été modifié',
            showConfirmButton: false,
            timer: 2000
          })
          this.route.navigate(['/']);}else{

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Password has been changed',
              showConfirmButton: false,
              timer: 2000
            })
            this.route.navigate(['/']);
          }
        },
        err=>{
          this.success = true;
          if(localStorage.getItem("langauage")==='fr'){
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'S il vous plait inserer un mot de passe valide',
              showConfirmButton: false,
              timer: 2000
            })
            this.route.navigate(['/']);}else{
  
              Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Please insert a valid password',
                showConfirmButton: false,
                timer: 2000
              })
              this.route.navigate(['/']);
            }
          
        }
      )
    }

  }

}
public togglePassword(){
  if(this.passwordShow){
    this.passwordShow = false;
    this.passwordType = "password";
    this.iconType="visibility";
  }else{
   this.passwordShow = true  ;
   this.passwordType = "text";
   this.iconType="visibility_off";
  }
}
}
