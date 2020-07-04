import {User} from './user';

export class Comment {
  id: number;
  content: string;
  commenter: User;
}
