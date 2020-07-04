import {Component, OnInit} from '@angular/core';
import {SexService} from '../../services/sex.service';
import {SizeService} from '../../services/size.service';
import {Specie} from '../../models/specie';
import {Size} from '../../models/size';
import {Sex} from '../../models/sex';
import {SpecieService} from '../../services/specie.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Pet} from "../../models/pet";
import {Post} from "../../models/post";
import {PetService} from "../../services/pet.service";

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

  name: string;
  // tslint:disable-next-line:variable-name
  date_of_birth: Date;
  // tslint:disable-next-line:variable-name
  image_url: string;
  post: Post;
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
  create() {
    const pet = new Pet(this.name, this.date_of_birth, this.image_url)
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
