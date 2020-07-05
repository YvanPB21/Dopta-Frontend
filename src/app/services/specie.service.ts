import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Specie} from '../models/specie';
import {Sex} from '../models/sex';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  private urlEndPoint = 'https://doptapp.herokuapp.com/api/species';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getSpecies(): Observable<Specie[]> {
    return this.http.get<any>(this.urlEndPoint);
  }
  getSpecie(id): Observable<Specie> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}`);
  }
}
