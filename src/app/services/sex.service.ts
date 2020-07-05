import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sex} from '../models/sex';
import {Pet} from '../models/pet';


@Injectable({
  providedIn: 'root'
})
export class SexService {

  private urlEndPoint = 'https://doptapp.herokuapp.com/api/sexes';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getSexes(): Observable<Sex[]> {
    return this.http.get<any>(this.urlEndPoint);
  }
  getSex(id): Observable<Sex> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}`);
  }
}
