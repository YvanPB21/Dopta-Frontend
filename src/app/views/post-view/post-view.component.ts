import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  posts: any;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe( response => {
      this.posts = response;
    });
  }

  applyFilter(object): void {
    this.postsService.getPosts().subscribe( response => {
      this.posts = response;
      let filtered = [];
      if (object.sex !== ''){
        for (let key in this.posts) {
          if (object.sex.name === this.posts[key].pet.sex.name){
            filtered.push(this.posts[key]);
          }
        }
        this.posts = filtered;
        filtered = [];
      }
      if (object.specie !== ''){
        for (let key in this.posts) {
          if (object.specie.name === this.posts[key].pet.species.name){
            filtered.push(this.posts[key]);
          }
        }
        this.posts = filtered;
        filtered = [];
      }
      if (object.size !== ''){
        for (let key in this.posts) {
          if (object.size.name === this.posts[key].pet.size.name){
            filtered.push(this.posts[key]);
          }
        }
        this.posts = filtered;
        filtered = [];
      }
      if (object.search !== ''){
        for (let key in this.posts) {
          object.search = object.search.toLowerCase();
          const name = this.posts[key].pet.name.toLowerCase();
          if (name.includes(object.search)){
            filtered.push(this.posts[key]);
          }
        }
        this.posts = filtered;
        filtered = [];
      }
    });
  }
}
