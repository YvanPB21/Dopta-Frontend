import {Pet} from './pet';
import {User} from './user';


export class Post {
  id: number;
  // tslint:disable-next-line:variable-name
  date_published: Date;
  description: string;
  // tslint:disable-next-line:variable-name
  date_adopted: Date;
  pet: Pet;
  poster: User;

  // tslint:disable-next-line:variable-name
  constructor(date_published: Date, description: string, date_adopted: Date, pet: Pet, poster: User) {
    this.date_published = date_published;
    this.description = description;
    this.date_adopted = date_adopted;
    this.pet = pet;
    this.poster = poster;
  }
}
