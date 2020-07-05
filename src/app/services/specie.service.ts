import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {
  baseUrl = environment.apiUrl + '/api/species';
  constructor(private httpClient: HttpClient) { }
  getSpecies(): any {
    return this.httpClient.get(this.baseUrl);
  }
  getSpecie(id): any{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
}
