import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  baseUrl = environment.apiUrl + '/api/sizes';
  constructor(private httpClient: HttpClient) { }
  getSizes(): any {
    return this.httpClient.get(this.baseUrl);
  }
  getSize(id): any{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
}
