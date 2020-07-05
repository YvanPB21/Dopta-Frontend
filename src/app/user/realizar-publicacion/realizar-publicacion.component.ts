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
import {TokenService} from '../../services/token.service';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {User} from '../../models/user';
import {MatSelectChange} from '@angular/material/select';

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
  poster: User;
  name: string;
  pet2: Pet;
  // tslint:disable-next-line:variable-name
  date_of_birth: Date;
  // tslint:disable-next-line:variable-name
  image_url: string;
  post: Post;
  pet: Pet;
  description: string;
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private userService: UserService, private specieService: SpecieService
               // tslint:disable-next-line:align
    , private sexService: SexService, private sizeService: SizeService, private petService: PetService,
              private tokenService: TokenService, private postService: PostService) {
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
    this.userService.getUser(this.tokenService.getUserId()).subscribe(
      poster => this.poster = poster
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
    this.pet = new Pet(this.name, this.date_of_birth, this.image_url, this.specie, this.size, this.sex);
    this.petService.create(this.pet).subscribe(data => {
      this.pet2 = data;
    });
    console.log(this.pet);
    const f =  new Date();
    f.getDate();
    let post: Post;
    post = new Post(f, this.description, null, this.pet2, this.poster);
    console.log(this.poster);
    console.log(this.pet.id);
    console.log(post);
    if (post != null) {
    this.postService.create(post).subscribe();
    }
    console.log(post);
  }
  createPet() {

  }
  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      description: ['']
    });
  }
  prueba() {
    console.log(this.pet.id);
  }
}
