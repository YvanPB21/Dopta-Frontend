import {Pet} from './pet';

export class Post {
  // tslint:disable-next-line:variable-name
  date_adopted: Date;
  // tslint:disable-next-line:variable-name
  date_published: Date;
  description: string;
  id: number;
  pet: Pet;
}
