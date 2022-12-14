import { Injectable } from '@angular/core';
import { HttpClient,  HttpEvent,  HttpHandler,  HttpHeaders, HttpParams, HttpRequest  } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandePatService {
  URL=environment.urlBackend
  token:any=localStorage.getItem('token_Pat')

  constructor(private http:HttpClient) { }

  AddDoctor(body:any){

/*     console.log(this.token) */
    const token=localStorage.getItem('token_Pat')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)


       return this.http.post<any>(`${this.URL}`+'demande/adddemande',body,{headers:headers});

     }

     AddPatient(body:any): Observable<any>{

          /*  console.log(body)   */
          const token=localStorage.getItem('token_Pro')
          const headers=new HttpHeaders().set('authorization','Bearer '+token)
      
      
             return this.http.post<any>(`${this.URL}`+'invitation/adddemande',body,{headers:headers});
      
           }
           AddCreatePatient(body:any): Observable<any>{

            /*  console.log(body)   */
            const token=localStorage.getItem('token_Pro')
            const headers=new HttpHeaders().set('authorization','Bearer '+token)
        
        
               return this.http.post<any>(`${this.URL}`+'invitation/proAddPatient',body,{headers:headers});
        
             }
           getStatusPatient(body:any){

      
           const token=localStorage.getItem('token_Pro')
           const headers=new HttpHeaders().set('authorization','Bearer '+token)
       
       
              return this.http.post<any>(`${this.URL}`+'invitation/getmystatus',body,{headers:headers});
       
            }
     getMyDoctor(id:any){

      /*     console.log(this.token) */
          const token=localStorage.getItem('token_Pat')
          const headers=new HttpHeaders().set('authorization','Bearer '+token)
      
      
             return this.http.get<any>(`${this.URL}`+'demande/getmydoctor/'+id,{headers:headers});
      
           }
}
