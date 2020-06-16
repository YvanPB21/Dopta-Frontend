import { Component, OnInit  } from '@angular/core';
import { Pet} from './pet';
import {PetService} from './pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  sizes: string[] = ['Pequeño', 'Mediano', 'Grande'];
  sexes: string[] = ['Hembra', 'Macho'];
  species: string [] = ['Perro', 'Gato', 'Conejo'];
  pets: Pet[];
  searchToken: string;


  constructor(private petService: PetService) { }

  ngOnInit(){
    this.petService.getClientes().subscribe(
      pets => this.pets = pets
    );
  }

}
