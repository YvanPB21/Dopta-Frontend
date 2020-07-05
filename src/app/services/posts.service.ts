import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = environment.apiUrl + '/api/adoptions';
  constructor(private http: HttpClient) {
  }
  getPosts(): any {
    return this.http.get(this.baseUrl);
  }
  create(post: any): any{
    return this.http.post(this.baseUrl, post);
  }
  getPost(id): any {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getPostsByUserId(id): any{
    return this.http.get(`${this.baseUrl}/${id}/posters`);
  }
}
