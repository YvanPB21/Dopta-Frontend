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
}
