import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pet} from '../models/pet';
import {Comment} from '../models/comment';

@Injectable()
export class CommentService {

  private urlEndPoint = 'https://doptapp.herokuapp.com/api/posts';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getCommentsByPostId(id): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.urlEndPoint}/${id}/comments`);
  }


}
