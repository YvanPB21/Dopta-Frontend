import { Injectable } from '@angular/core';
import { Pet} from './pet';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PetService {

  private urlEndPoint = 'http://localhost:8080/pets';
  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getClientes(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.urlEndPoint);
  }

  create(pet: Pet): Observable<Pet>{
    return this.http.post<Pet>(this.urlEndPoint, pet, {headers: this.httpHeaders});
  }

  getPet(id): Observable<Pet>{
    return this.http.get<Pet>(`${this.urlEndPoint}/${id}`);
  }

  update(pet: Pet): Observable<Pet>{
    return this.http.put<Pet>(`${this.urlEndPoint}/${pet.id}`, pet, {headers: this.httpHeaders});
  }

}
