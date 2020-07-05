import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SexService {

  baseUrl = environment.apiUrl + '/api/sexes';
  constructor(private httpClient: HttpClient) { }
  getSexes(): any {
    return this.httpClient.get(this.baseUrl);
  }
  getSex(id): any{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
}
