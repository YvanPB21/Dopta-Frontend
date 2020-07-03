import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sex} from '../models/sex';


@Injectable({
  providedIn: 'root'
})
export class SexService {

  private urlEndPoint = 'http://localhost:8080/api/sexes';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getSexes(): Observable<Sex[]> {
    return this.http.get<any>(this.urlEndPoint);
  }

}
