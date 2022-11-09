import { Component, OnInit } from '@angular/core';
import { AuthPatientService } from 'src/app/views/services/patient/auth-patient.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { DemandePatService } from 'src/app/views/services/patient/demande-pat.service';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/views/helper/MustMatch.validator';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  registerFormPat: FormGroup;
  result:any;
  dataAddInvit:any;
  emailValid:string="";
  validSpinner=false;
  resultAdd=false;
  testName = false;
  testLastName = false;
  testEmail = false;
  testPassword = false;
  testAdresse = false;
  testGender = false;
  testBirthday = false;
  testTelephone = false;
  testSsn = false;
  url :any;
  patient = {

    name: '',
    lastname: '',
    email: '',
    birthday: '',
    ssn: '',
    adresse: '',
    tel: '',
    password: '',
    added_date: '',
    gender: '',
    account_state: false,
    archived: false,
    photo:'',
    weight:0,
    size:0,
    mailConfirmation:false,
    consontement:""


  }
  registerForm: FormGroup;
  submitted = false;
  title = 'email-validation-tutorial';
  userEmails = new FormGroup({
    primaryEmail: new FormControl('',[
    Validators.required,
    
  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    secondaryEmail: new FormControl('',[
    Validators.required,
    
  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });  
  constructor( private formBuilder: FormBuilder,  private AuthPatient: AuthPatientService,private snackBar:MatSnackBar, private DemandeService: DemandePatService,private router: Router) { }

  ngOnInit(): void {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  this.registerFormPat = this.formBuilder.group({

    name: ['', Validators.required],
    lastname: ['', Validators.required],
    birthday: ['', Validators.required],
    tel: ['', Validators.required],
    adresse: ['', Validators.required],
    ssn: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
    password: ['', [Validators.required, this.checkPassword]],
    confirmPassword: ['', [Validators.required, this.checkPassword]],
    acceptTerms: [false, Validators.requiredTrue],
    consontement: [false, Validators.requiredTrue],
    mailConfirmation: [false, Validators.requiredTrue],
    weight: [false, Validators.required],
    size: [false, Validators.required],
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });
  this.registerForm = this.formBuilder.group({
    title: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue]
}, {
    validator: MustMatch('password', 'confirmPassword')
});
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }
  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }
  // add patient 
  createPatien(){

  this.AuthPatient.registerPatient(this.patient).subscribe((response) => {
console.log(response);
this.dataAddInvit=response
 let obj ={
 
  doctor :localStorage.getItem('id_Pro'),
  patient:this.dataAddInvit._id,
  email:this.dataAddInvit.email,
  dataPatient:this.patient

}
console.log(obj)
this.DemandeService.AddCreatePatient(obj).subscribe((res)=>{
   if(res){
    this.router.navigate(['/professionnel/contact'])
   }

  }) 
})  
  }
  validEmail(){
    this.validSpinner=true;
/*     console.log("this.patient.email",this.patient.email) */
    let obj = {
      email: this.patient.email
    }
    this.AuthPatient.emailIsExist(obj).subscribe((res) => {
 
    this.result=res;
        if(this.result.res==="Invalid Email"){
       
          setTimeout(() => {
            this.resultAdd=true;
            this.validSpinner=false;
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            if(localStorage.getItem("langauage")==='fr')
            Toast.fire({
              icon: 'success',
              title: "Le compte a été créé"
            })
            else
            Toast.fire({
              icon: 'success',
              title: "Account has been created"
            })
            this.createPatien()
          }, 5000);
        }else{
          setTimeout(() => {
            this.resultAdd=false;
            this.validSpinner=false;
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            if(localStorage.getItem("langauage")==='fr')
            Toast.fire({
              icon: 'error',
              title: "L'email existe déjà",
            })
            else
            Toast.fire({
              icon: 'error',
              title: "Email is exist ",
            })
          }, 5000);
        }
    
    })
  }
  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
console.log(this.registerFormPat)
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
