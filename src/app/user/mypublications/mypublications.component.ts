import { Component, OnInit } from '@angular/core';
import {Size} from '../../models/size';
import {Sex} from '../../models/sex';
import {Specie} from '../../models/specie';
import {Post} from '../../models/post';
import {Like} from '../../models/like';
import {PetService} from '../../services/pet.service';
import {SpecieService} from '../../services/specie.service';
import {SexService} from '../../services/sex.service';
import {SizeService} from '../../services/size.service';
import {PostService} from '../../services/post.service';
import {LikeService} from '../../services/like.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-mypublications',
  templateUrl: './mypublications.component.html',
  styleUrls: ['./mypublications.component.css']
})
export class MypublicationsComponent implements OnInit {
  sizes: Size[];
  sexes: Sex[];
  species: Specie[];
  userposts: Post[];
  id = this.tokenService.getUserId();

  like: Like = new Like();

  // tslint:disable-next-line:max-line-length
  constructor( private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute, private tokenService: TokenService) {

  }

  ngOnInit(): void {
    this.postService.getPostsByUserId(this.id).subscribe(
      userposts => {this.userposts = userposts;
                    console.log(userposts);
      }
    );
  }
  view(id) {
    console.log(id);
    this.router.navigate(['publication/', id]);
  }
}
