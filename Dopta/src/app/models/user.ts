import {Gender} from './gender';

export class User {
  id: number;
  // tslint:disable-next-line:variable-name
  date_of_birth: Date;
  dni: number;
  // tslint:disable-next-line:variable-name
  email_address: string;
  // tslint:disable-next-line:variable-name
  last_names: string;
  names: string;
  password: string;
  // tslint:disable-next-line:variable-name
  profile_pic_url: string;
  username: string;
  gender: Gender;
}
