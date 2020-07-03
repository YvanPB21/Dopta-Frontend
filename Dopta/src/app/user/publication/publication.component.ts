import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../../services/pet.service';
import {Pet} from '../../models/pet';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../models/comment';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  post: Post = null;
  comments: Comment[];
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService, private commentService: CommentService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.postService.getPost(id).subscribe(
        post => {
          this.post = post;
        }
    );
    this.commentService.getCommentsByPostId(id).subscribe(
      comments => {
        this.comments = comments;
      }
    );
  }
    goToProfile(id) {
    this.router.navigate(['userprofile/', id]);
    }
}
