import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Size} from '../models/size';


@Injectable({
  providedIn: 'root'
})
export class SizeService {

  private urlEndPoint = 'http://localhost:8080/api/sizes';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getSizes(): Observable<Size[]> {
    return this.http.get<any>(this.urlEndPoint);
  }

}
