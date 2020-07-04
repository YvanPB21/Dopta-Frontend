import {Specie} from './specie';
import {Size} from './size';
import {Sex} from './sex';
import {DatePipe} from '@angular/common';

export class Pet {
  id: number;
  name: string;
  // tslint:disable-next-line:variable-name
  date_of_birth: Date;
  // tslint:disable-next-line:variable-name
  image_url: string;
  species: Specie;
  size: Size;
  sex: Sex;

  constructor(name: string, date_of_birth: Date, image_url: string) {
    this.name = name;
    this.date_of_birth = date_of_birth;
    this.image_url = image_url;
  }
}
