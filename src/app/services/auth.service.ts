import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private reqHeader: HttpHeaders = new HttpHeaders({
  //   Authorization: `Bearer ${CONTENTFUL_CONFIG.authToken}`,
  // });
  constructor(private http: HttpClient) { }


  // Perform login (this is a basic example, adjust as needed)
  login(username: string, password: string): Observable<any> {
    const url = "http://localhost:8080/api/auth/signin";
    const reqBody = {
      username: username,
      password: password
    }
    return this.http.post<any>(url, reqBody);
  }



  // Check if a user is authenticated based on the presence of a token
  private hasToken(): boolean {
    // Replace this with your actual token checking logic
    return !!localStorage.getItem('token');
  }
}
