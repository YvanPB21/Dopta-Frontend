import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + '/auth';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  constructor(private httpClient: HttpClient) { }

  login(model: any): any {
    return this.httpClient.post(`${this.baseUrl}/login`, model).pipe(
      map((response: any) => {
        if (response) {
          const token = response.token;
          localStorage.setItem('token', token);
          this.decodedToken = this.jwtHelper.decodeToken(token);
          console.log(this.decodedToken);
        }
      })
    );
  }
  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  register(model: any): any {
    return this.httpClient.post(`${this.baseUrl}/nuevo`, model);
  }
}
