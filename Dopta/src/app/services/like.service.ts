import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Like} from '../models/like';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private urlEndPoint = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getLikes(postId): Observable<Like[]> {
    return this.http.get<Like[]>(`${this.urlEndPoint}/${postId}/likes`);
  }

  create(like: Like, postId, likerId): Observable<Like> {
    return this.http.post<Like>(`${this.urlEndPoint}/${postId}/likes/${likerId}`, like, {headers: this.httpHeaders});
  }
}
