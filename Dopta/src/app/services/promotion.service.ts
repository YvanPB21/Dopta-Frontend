import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Promotion} from '../models/promotion';

@Injectable()
export class PromotionService {
  private urlEndPoint = 'http://localhost:8080/api/promos';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.urlEndPoint);
  }

  create(promotion: Promotion): Observable<Promotion> {
    return this.http.post<Promotion>(this.urlEndPoint, promotion, {headers: this.httpHeaders});
  }

  getPromotionId(id): Observable<Promotion> {
    return this.http.get<Promotion>(`${this.urlEndPoint}/${id}`);
  }

  update(promotion: Promotion): Observable<Promotion> {
    return this.http.put<Promotion>(`${this.urlEndPoint}/${promotion.id}`, promotion, {headers: this.httpHeaders});
  }
}
