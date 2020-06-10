import { Component, OnInit  } from '@angular/core';
import { Pet} from './pet';
import {PetService} from './pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
})
export class PetsComponent implements OnInit {
  pets: Pet[];
  constructor(private petService: PetService) { }

  ngOnInit(){
    this.petService.getClientes().subscribe(
      pets => this.pets = pets
    );
  }


}
