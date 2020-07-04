import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Specie} from '../models/specie';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  private urlEndPoint = 'http://localhost:8080/api/species';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getSpecies(): Observable<Specie[]> {
    return this.http.get<any>(this.urlEndPoint);
  }

}
