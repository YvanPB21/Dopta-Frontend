import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  baseUrl = environment.apiUrl + '/api/pets';
  constructor(private http: HttpClient) {
  }
  getPets(): any {
    return this.http.get(this.baseUrl);
  }
  create(pet: any): any{
    return this.http.post(this.baseUrl, pet);
  }
}
