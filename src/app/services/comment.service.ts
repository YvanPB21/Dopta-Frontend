import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = environment.apiUrl + '/api';
  constructor(private http: HttpClient) {
  }

  getCommentsByPostId(id): any{
    return this.http.get(`${this.baseUrl}/posts/${id}/comments`);
  }
  create(postId: any, posterId: any, comment: any): any{
    return this.http.post(`${this.baseUrl}/posts/${postId}/comments/${posterId}`, comment);
  }
}
