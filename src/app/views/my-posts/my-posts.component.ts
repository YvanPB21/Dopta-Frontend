import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  posts: any;
  constructor(private postService: PostsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.postService.getPostsByUserId(this.authService.decodedToken.jti).subscribe(response => {
      this.posts = response;
    });
  }

}
