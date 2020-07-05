import {Component, OnInit} from '@angular/core';
import {SpecieService} from '../../services/specie.service';
import {SexService} from '../../services/sex.service';
import {SizeService} from '../../services/size.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PetService} from '../../services/pet.service';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.css']
})
export class PublicationFormComponent implements OnInit {

  constructor(private specieService: SpecieService, private sexService: SexService,
              private sizeService: SizeService, private petService: PetService, private userService: UserService,
              private authService: AuthService, private postService: PostsService) {
  }
  form: FormGroup;
  // tslint:disable-next-line:variable-name
  _species: any;
  sexes: any;
  sizes: any;
  species: string;
  sex: string;
  size: string;

  model = {
    name: '',
    date_of_birth: null,
    image_url: null,
    sex: null,
    size: null,
    species: null
  };

  ngOnInit(): void {
    this.specieService.getSpecies().subscribe(
      species => {
        this._species = species;
        console.log(this._species);
      }
    );
    this.sexService.getSexes().subscribe(
      sexes => this.sexes = sexes
    );
    this.sizeService.getSizes().subscribe(
      sizes => {
        this.sizes = sizes;
      }
    );
    this.form = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      date_of_birth: new FormControl(),
      image_url: new FormControl()
    });
  }

  create(): void {
    this.model.name = this.form.value.name;
    this.model.date_of_birth = this.form.value.date_of_birth;
    this.model.image_url = this.form.value.image_url;
    this.model.sex = this.sex;
    this.model.size = this.size;
    this.model.species = this.species;
    this.petService.create(this.model).subscribe((response) => {
      const modelPost = {
        description: '',
        date_adopted: null,
        pet: null,
        poster: null
      };
      modelPost.description = this.form.value.description;
      modelPost.pet = response;
      this.userService.getUser(this.authService.decodedToken.jti).subscribe(response2 => {
        modelPost.poster = response2;
        this.postService.create(modelPost).subscribe((response3) => {
          console.log(response3);
        });
      });
    });
  }

  sexSelected($event: any): void {
    const sexId = $event.value.id;
    this.sexService.getSex(sexId).subscribe(
      sex => this.sex = sex
    );
  }

  sizeSelected($event: any): void {
    const sizeId = $event.value.id;
    this.sizeService.getSize(sizeId).subscribe(
      size => this.size = size
    );
  }

  specieSelected($event: any): void {
    const specieId = $event.value.id;
    this.specieService.getSpecie(specieId).subscribe(
      specie => this.species = specie
    );
  }
}
