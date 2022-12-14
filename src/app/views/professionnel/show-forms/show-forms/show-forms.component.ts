import { Component, OnInit } from '@angular/core';
import { PatientFormsService } from 'src/app/views/services/patient/patient-forms.service';
import { FormDataService } from 'src/app/views/services/shared-data/form-data.service';
import { Options } from 'ng5-slider';
import { ActivatedRoute } from '@angular/router';
 

// your-app.scss


@Component({
  selector: 'app-show-forms',
  templateUrl: './show-forms.component.html',
  styleUrls: ['./show-forms.component.css']
})
export class ShowFormsComponent implements OnInit {
  idForm:any
form:any
idForm2:any;
favoriteSeason:string;
numbers: number[] = [];
  constructor(private PatForms:PatientFormsService,private data:FormDataService, private router: ActivatedRoute,) {
 
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
    this.idForm2 = this.router.snapshot.paramMap.get('id');
     
    this.PatForms.getFormsDoctById(this.idForm2).subscribe(response=>{
    
 console.log(response)
      this.form=response
 
 
     })

   
   }
   sliderMakeOptions(slider): Options {
       /*  console.log(slider.dataRange)   */
        return {
          floor: 10,
          ceil: 100,
          step: 10,
          showTicks: true,
     stepsArray:slider.dataRange,  
    
    }
      }
  ngOnInit(): void {

  }

}
