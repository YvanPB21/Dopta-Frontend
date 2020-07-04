import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PostService {

  private urlEndPoint = 'https://doptapp.herokuapp.com/api/adoptions';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlEndPoint);
  }
  getPostsByUserId(id): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.urlEndPoint}/${id}/posters`);
  }
  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.urlEndPoint, post, {headers: this.httpHeaders});
  }

  getPost(id): Observable<Post> {
    return this.http.get<Post>(`${this.urlEndPoint}/${id}`);
  }

  update(pet: Post): Observable<Post> {
    return this.http.put<Post>(`${this.urlEndPoint}/${pet.id}`, pet, {headers: this.httpHeaders});

  }

}
