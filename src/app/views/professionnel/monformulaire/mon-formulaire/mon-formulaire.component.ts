import { Component, OnInit } from '@angular/core';
import { AuthProfessionnelService } from 'src/app/views/services/professionnel/auth-professionnel.service';
import { FormsService } from '../../../services/professionnel/forms.service';
import { InvitaionsService } from '../../../services/professionnel/invitaions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormDataService } from '../../../services/shared-data/form-data.service';
import{PaymentService} from '../../../services/Payment/payment.service'
import { PatientFormsService } from 'src/app/views/services/patient/patient-forms.service';
@Component({
  selector: 'app-mon-formulaire',
  templateUrl: './mon-formulaire.component.html',
  styleUrls: ['./mon-formulaire.component.scss']
})
export class MonFormulaireComponent implements OnInit {
  id: any;
  forms:any;
  formId:any;
  contacts:any;
  p:number;
  p2:number;
  checked:true;
  filtredForms:any
  nb=1
  i=1;
  item:"test";
  config: any;
  collection = { count: 230, data: [] };

  configCustomPagination: any;
  collectionCustomPagination = { count: 30, data: [] };
  mesgEmpty: boolean=false;

  constructor( private PaymentService:PaymentService,private data:FormDataService,private PatForms:PatientFormsService,
    private router:Router,private snackBar:MatSnackBar,private invservice:InvitaionsService,private formsService:FormsService,private authPro: AuthProfessionnelService) { 
    this.mesgEmpty=false;
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 150
    };
    this.configCustomPagination = {
      id: 'customPaginate',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 20
    };
    this.id = this.authPro.geid()
   

    this.formsService.getAllForm().subscribe(response=>{
      // console.log(JSON.stringify(response))
  
      this.forms=response
      this.filtredForms=response
          
         this.mesgEmpty=true;
    


  })
/*   for (var i = 0; i < this.collection.count; i++) {
    this.collection.data.push(
      {
        id: i + 1,
        value: "Collection value " + (i + 1)
      }
    );
  } */
/*   this.collectionCustomPagination = this.collection;
  for (var i = 0; i < this.collection.count; i++) {
    this.collection.data.push(
      {
        id: i + 1,
        value: "Collection value " + (i + 1)
      }
    );
  }
  this.collectionCustomPagination = this.collection; */
  this.config = {
    id: 'basicPaginate',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.collection.count
  };
  this.configCustomPagination = {
    id: 'customPaginate',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.collectionCustomPagination.count
  };
 this.invservice.myContactsPatient(this.id).subscribe(response =>{
  console.log("response", response)
  this.contacts=response;
  console.log("response", this.contacts)
})
  }

  affect = {
    doctor: '',
    user: '',
    form: '',

  }
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: '<--',
    nextLabel: '-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  pageChanged(event) {
    this.config.currentPage = event;
  }

  onPageChange(event) {
    this.configCustomPagination.currentPage = event;
  }
  async ngOnInit() {
   /*  const res:any = await this.formsService.getForms(this.id).toPromise(); */
 /* 
    console.log("this.filtredForms",res)  */

    this.PaymentService.checkAchat(this.id).subscribe(checked=>{
this.checked=checked
//console.log(this.checked)
    })
  }
  affectForm(id:any){
this.affect.user=id
this.affect.doctor=this.id
this.affect.form=this.formId
// console.log('this is add'+this.affect.user)
// console.log('this is add'+this.affect.doctor)
  console.log('this is add'+this.id,this.affect)
this.formsService.getAffectation(this.id).subscribe((res)=>{
// console.log('resss',res)
})
    this.formsService.affectForm(this.id,this.affect).subscribe(response=>{
         
         if(localStorage.getItem("langauage")=='fr'){
      this.snackBar.open(" Formulaire affect?? avec succ??s" ,"??", {

        duration: 5000,
    
        // here specify the position
    
        verticalPosition: 'top',
        panelClass:'success'
    
      })}else{
        this.snackBar.open(" Form affected successfully" ,"??", {

          duration: 5000,
      
          // here specify the position
      
          verticalPosition: 'top',
          panelClass:'success'
      
        })
      }
   
  },error=> this.snackBar.open(" form affection failed " ,"??", {

    duration: 5000,

    // here specify the position

    verticalPosition: 'top',
    panelClass:'error'

  }))
    }
    getFormId(formId){
      this.formId=formId
      // console.log(formId)


    }

    showForm(formId,form){
      this.formId=formId
      // console.log('show')
      this.data.GetId(formId)

    //  console.log(formId)
    this.router.navigate(['/professionnel/show-forms',formId._id])



    }

    filterItem(value) {
      this.forms = this.filtredForms.filter(i => {
        return (
          i.title.toLowerCase().includes(value.toLowerCase()) 
          
        )
      })
   }
    async retour(){

     await this.router.navigate(['professionnel/profil'])
      window.location.reload();

    }

   
}
