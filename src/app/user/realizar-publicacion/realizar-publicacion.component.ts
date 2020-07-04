import {Component, OnInit} from '@angular/core';
import {SexService} from '../../services/sex.service';
import {SizeService} from '../../services/size.service';
import {Specie} from '../../models/specie';
import {Size} from '../../models/size';
import {Sex} from '../../models/sex';
import {SpecieService} from '../../services/specie.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pet} from '../../models/pet';
import {Post} from '../../models/post';
import {PetService} from '../../services/pet.service';
import {MatSelectChange} from '@angular/material/select';
import {eventTargetLegacyPatch} from 'zone.js/lib/browser/event-target-legacy';

@Component({
  selector: 'app-realizar-publicacion',
  templateUrl: './realizar-publicacion.component.html',
  styleUrls: ['./realizar-publicacion.component.css']
})
export class RealizarPublicacionComponent implements OnInit {
  form: FormGroup;
  sexes: Sex[];
  sizes: Size[];
  species: Specie[];
  specieId: number;
  sexId: number;
  sizeId: number;
  specie: Specie;
  sex: Sex;
  size: Size;
  name: string;
  // tslint:disable-next-line:variable-name
  date_of_birth: Date;
  // tslint:disable-next-line:variable-name
  image_url: string;
  post: Post;
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private specieService: SpecieService, private sexService: SexService, private sizeService: SizeService, private petService: PetService) {
     this.buildForm();
  }

  ngOnInit(): void {
    this.specieService.getSpecies().subscribe(
      species => this.species = species
    );
    console.log(this.species);
    this.sexService.getSexes().subscribe(
      sexes => this.sexes = sexes
    );
    this.sizeService.getSizes().subscribe(
      sizes => {
        this.sizes = sizes;
      }
    );
  }
  specieSelected(event: MatSelectChange) {
    console.log(event.value.id);
    this.specieId = event.value.id;
    this.specieService.getSpecie(this.specieId).subscribe(
      specie => this.specie = specie
    );
  }
  sexSelected(event: MatSelectChange) {
    console.log(event.value.id);
    this.sexId = event.value.id;
    this.sexService.getSex(this.sexId).subscribe(
      sex => {this.sex = sex;
              console.log(sex);
      }
    );
  }
  sizeSelected(event: MatSelectChange) {
    console.log(event.value.id);
    this.sizeId = event.value.id;
    this.sizeService.getSize(this.specieId).subscribe(
      size => this.size = size
    );
  }

  create() {
    let pet: Pet;
    pet = new Pet(this.name, this.date_of_birth, this.image_url, this.specie, this.size, this.sex);
    this.petService.create(pet).subscribe();
    console.log(pet);
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
    });
  }

}
