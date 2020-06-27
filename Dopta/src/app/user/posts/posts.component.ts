import { Component, OnInit  } from '@angular/core';
import { Post} from '../../models/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-pets',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  sizes: string[] = ['Pequeño', 'Mediano', 'Grande'];
  sexes: string[] = ['Hembra', 'Macho'];
  species: string [] = ['Perro', 'Gato', 'Conejo'];
  pets: Post[];
  searchToken: string;

  constructor(private petService: PostService) { }
  ngOnInit(){
    this.petService.getClientes().subscribe(
      pets => this.pets = pets
    );
  }

}
