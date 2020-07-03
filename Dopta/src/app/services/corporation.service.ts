import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Corporation} from '../models/corporation';

@Injectable()
export class CorporationService {

  private urlEndPoint = 'http://localhost:8080/api/corporations';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getCorporation(): Observable<Corporation[]> {
    return this.http.get<Corporation[]>(this.urlEndPoint);
  }

  create(corporation: Corporation): Observable<Corporation> {
    return this.http.post<Corporation>(this.urlEndPoint, Corporation, {headers: this.httpHeaders});
  }

  getCorporationId(id): Observable<Corporation> {
    return this.http.get<Corporation>(`${this.urlEndPoint}/${id}`);
  }

  update(corporation: Corporation): Observable<Corporation> {
    return this.http.put<Corporation>(`${this.urlEndPoint}/${corporation.id}`, corporation, {headers: this.httpHeaders});
  }
}
