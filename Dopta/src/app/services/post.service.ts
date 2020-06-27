import { Injectable } from '@angular/core';
import { Post} from '../models/post';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PostService {

  private urlEndPoint = 'http://localhost:8080/adoption';
  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getClientes(): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlEndPoint);
  }

  create(pet: Post): Observable<Post>{
    return this.http.post<Post>(this.urlEndPoint, pet, {headers: this.httpHeaders});
  }

  getPet(id): Observable<Post>{
    return this.http.get<Post>(`${this.urlEndPoint}/${id}`);
  }

  update(pet: Post): Observable<Post>{
    return this.http.put<Post>(`${this.urlEndPoint}/${pet.id}`, pet, {headers: this.httpHeaders});

  }

}
