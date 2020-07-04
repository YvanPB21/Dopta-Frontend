import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';


@Injectable()
export class UserService {

  private urlEndPoint = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlEndPoint);
  }

  create(pet: User): Observable<User> {
    return this.http.post<User>(this.urlEndPoint, pet, {headers: this.httpHeaders});
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(`${this.urlEndPoint}/${id}`);
  }

  update(pet: User): Observable<User> {
    return this.http.put<User>(`${this.urlEndPoint}/${pet.id}`, pet, {headers: this.httpHeaders});

  }

}
