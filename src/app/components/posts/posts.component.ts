import {Component, Input} from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input()posts: any;
  constructor(private postsService: PostsService) { }
}
