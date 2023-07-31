import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuth } from '../models/user-auth.model';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl='http://localhost:8080/api/users';
 


  constructor(private http: HttpClient) {}

  registerUser(user: UserAuth): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
  loginUser(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
}
