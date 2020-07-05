import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl + '/api/users';
  constructor(private httpClient: HttpClient) { }
  getUser(id): any{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
}
