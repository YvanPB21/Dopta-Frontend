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

  like: Like = new Like();

  constructor( private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.postService.getPostsByUserId(4).subscribe(
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
