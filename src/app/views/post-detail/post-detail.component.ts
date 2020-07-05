import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import {CommentService} from '../../services/comment.service';
import {MatDialog} from '@angular/material/dialog';
import {CommentDialogComponent} from '../../components/comment-dialog/comment-dialog.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: any;
  comments: any;
  likes: number;
  commentDialog: any;
  comment = '';

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostsService,
              private commentService: CommentService, public dialog: MatDialog, private authService: AuthService) {
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

  goToProfile(id): void {
    this.router.navigate(['profile/', id]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '600px',
      data: {comment: this.comment}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.comment = result;
      const model = {content: this.comment, date: Date.now()};
      this.commentService.create(this.activatedRoute.snapshot.params.id, this.authService.decodedToken.jti, model).subscribe(() => {
        this.commentService.getCommentsByPostId(this.activatedRoute.snapshot.params.id).subscribe(
          comments => {
            this.comments = comments;
          }
        );
      });
    });
  }
}
