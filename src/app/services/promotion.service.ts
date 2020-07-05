import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  baseUrl = environment.apiUrl + '/api/promos';
  constructor(private http: HttpClient) {
  }
  getPromotions(): any {
    return this.http.get(this.baseUrl);
  }
  getPromotionById(id): any{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
