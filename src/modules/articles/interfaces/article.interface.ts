import { ICritique } from 'src/modules/critiques/interfaces/critique.interface';
import { IUser } from 'src/modules/users/interfaces/user.interface';

export interface IArticle {
  id: number;
  titleArticle: string;
  content: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  archived: boolean;
  datePublished: Date;
  authorId: number;
  author: IUser;
  pdfPath?: string;
  critiques?: ICritique[];
}
