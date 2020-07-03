import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';
import {Specie} from '../../models/specie';
import {SpecieService} from '../../services/specie.service';
import {Sex} from '../../models/sex';
import {SexService} from '../../services/sex.service';
import {Size} from '../../models/size';
import {SizeService} from '../../services/size.service';
import {Pet} from '../../models/pet';
import {PetService} from '../../services/pet.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  sizes: Size[];
  sexes: Sex[];
  species: Specie[];
  posts: Post[];
  searchToken: string;

  constructor(private petService: PetService, private specieService: SpecieService
          ,   private sexService: SexService, private sizeService: SizeService, private postService: PostService, private router: Router) {

  }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      posts => {
        this.posts = posts;
        console.log(posts);
      }
    );
    this.specieService.getSpecies().subscribe(
        species => this.species = species
      );
    console.log(this.species);
    this.sexService.getSexes().subscribe(
        sexes => this.sexes = sexes
      );
    this.sizeService.getSizes().subscribe(
      sizes => this.sizes = sizes
    );
    }
    view(id){
    console.log(id);
    this.router.navigate(['publication/', id]);
    }
  }

