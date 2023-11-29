import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
  }
  
  public login(data:any): Observable<any> {
    // const headers = new HttpHeaders({
    //     // If your API requires specific headers, add them here
    //   });
    // console.warn('*************', 'https://buildwebsite.co.in/Demo/AR/socialplayapi/api/login.php',data)
    return this.http.post('https://buildwebsite.co.in/Demo/AR/socialplayapi/api/login.php',data)

  }

  
}
