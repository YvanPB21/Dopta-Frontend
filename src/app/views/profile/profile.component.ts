import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userposts: any;
  user: any;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private postService: PostsService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.userService.getUser(id).subscribe(
      user => {this.user = user;
      }
    );
    this.postService.getPostsByUserId(id).subscribe(
      userposts => {this.userposts = userposts;
      }
    );
  }
  goToPost(id): void {
    this.router.navigate(['/post', id]);
  }

}
