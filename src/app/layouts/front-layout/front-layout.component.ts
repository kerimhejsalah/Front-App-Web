import { Component, OnDestroy, OnInit,NgZone, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModel, AuthComponent } from '../../views/shared-components/auth/auth.component';
import { AuthProfessionnelService } from '../../views/services/professionnel/auth-professionnel.service'
import {TranslationService} from '../../translation.service';
import { ListedialogComponent } from 'src/app/listedialog/listedialog.component';
@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit, OnDestroy {
  result: any;
  @Output() public sidenavToggle = new EventEmitter();
  status = false
  whois: boolean
  guser;
  currentLang = 'fr';
  languages=[
    {key :'en',displayValue:'Français'},
    {key :'fr',displayValue:'English'},



  ]
  languageSelect= 'fr';
  token: any = localStorage.getItem('token_Pro')
  tokenPat: any = localStorage.getItem('token_Pat')
  constructor(private authPro: AuthProfessionnelService, public dialog: MatDialog,  ngZone :NgZone,public translationService: TranslationService) {
    this.isLoggidIn();
  if(localStorage.getItem('langauage')==null){
    this.languageSelect='fr'
  }else{
    this.languageSelect=localStorage.getItem('langauage')}
    window['onSignIn']= user => ngZone.run(
      () =>{
        this.afterSignUp(user)
      }
)
  }
  ngOnInit(): void {

  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
  }
}
hello(){
/*   console.log('tt'); */
  //const dialogRef = this.dialog.open(ListedialogComponent, {restoreFocus: false});
}
  onLangChange(currentLang: string) {
    localStorage.setItem('langauage',currentLang)
    this.translationService.useLang(currentLang);
    console.log("currentLang",currentLang)
  }
  afterSignUp(googleUser){
    this.guser=googleUser;
   /*  console.log(this.guser) */
     }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    this.dialog.open(AuthComponent, dialogConfig);


  }
  scrollWin() {
    window.scrollTo(0, 500);
  }



  // confirmDialog(): void {
  //   const message = `Are you sure you want to delete?`;
  //   const resDialog = new DialogModel("Confirm Action", message);
  //   const dialogRef = this.dialog.open(AuthComponent, {
  //     maxWidth: "auto",
  //     data: resDialog
  //   });
  //   dialogRef.afterClosed().subscribe(dialogResult => {
  //     this.result = dialogResult;
  //   });


  // }
  isLoggidIn() {
    if (this.token) {
      this.status = true
      this.whois = true
    }
    if (this.tokenPat) {
      this.status = true
      this.whois = false
    }

    if (this.tokenPat = "") {
      this.status = false
    }
    if (this.token = "") {
      this.status = false

    }




   /*  console.log(this.status, this.whois) */
  }
  ngOnDestroy() {


    this.dialog.closeAll();


  }

}
