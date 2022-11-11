import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import SignaturePad from 'signature_pad';
import { UpdProfilPatientService } from '../views/services/patient/upd-profil-patient.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef;
  sig: SignaturePad;
  imgPad;
  test = false;
  type =""
  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  name = 'Angular';
  fileToUpload: any;
  imageUrl: any;
  namePro="";
  lastname:""
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    public updateservice: UpdProfilPatientService,
    private dialogRef: MatDialogRef<DialogComponent>) {
   console.log(data)
    if (data) {
      this.namePro=data.data.name+" ";
      this.lastname=data.data.lastname
      this.type=data.type;
      console.log(this.type)
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  ngOnInit(): void {
    this.sig = new SignaturePad(this.canvas.nativeElement, {
      penColor: 'black',
    });
  }
  clear() {
    this.sig.clear();
    this.test=false;
    this.imageUrl=undefined;
  }
  download() {

    //console.log(this.sig.toDataURL('image/svg+xml'));


  }
  onConfirmClick(): void {
    if(this.test){
      this.dialogRef.close({result:true,data:this.imageUrl });
    }else{
    this.updateservice.uploadImage(this.sig.toDataURL('image/svg+xml')).subscribe((result) => {
      if (result) {
        this.imgPad = result
           this.dialogRef.close({result:true,data:result});
      }

    })}

  }
  onConfirmClick2(): void {
      this.dialogRef.close({result:false,data:null});

  }
  handleFileInput(file: FileList) {





    //Show image preview

    let reader = new FileReader();
    console.log('hhh', reader); 
    reader.onload = (event: any) => {



      /*  */

      this.updateservice.uploadImage(event.target.result).subscribe((result) => {

        console.log('hhh', result);



      })

    };



  }
  handleFileInput3(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.updateservice.uploadImage(event.target.result).subscribe((result) => {
        this.imgPad = result
        this.test = true
        this.imageUrl =result
     
 
      })  
    }
    reader.readAsDataURL(this.fileToUpload);
  }
}
