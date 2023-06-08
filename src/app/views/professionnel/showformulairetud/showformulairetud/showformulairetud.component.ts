import { Component, OnInit } from '@angular/core';
import { PatientFormsetudService } from 'src/app/views/services/patient/patient-formsetud.service';
import { FormDataService } from 'src/app/views/services/shared-data/form-data.service';
import { Options } from 'ng5-slider';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-showformulairetud',
  templateUrl: './showformulairetud.component.html',
  styleUrls: ['./showformulairetud.component.css']
})
export class ShowformulairetudComponent implements OnInit {
  idForm:any
form:any
idForm2:any;
favoriteSeason:string;
numbers: number[] = [];
  constructor(private PatForms:PatientFormsetudService,private data:FormDataService, private router: ActivatedRoute,) {
 
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
    this.idForm2 = this.router.snapshot.paramMap.get('id');
     
    this.PatForms.getFormsDoctById(this.idForm2).subscribe(response=>{
    
/*  console.log(response) */
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
