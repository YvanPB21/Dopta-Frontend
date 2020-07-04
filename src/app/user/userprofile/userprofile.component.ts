import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
userposts: Post[];
  user: User = null;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private postService: PostService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.userService.getUser(id).subscribe(
      user => {this.user = user;
               console.log(user);
      }
    );
    this.postService.getPostsByUserId(id).subscribe(
      userposts => {this.userposts = userposts;
                    console.log(userposts);
      }
    );
  }
  goToPost(id) {
    this.router.navigate(['publication/', id]);
  }
}
