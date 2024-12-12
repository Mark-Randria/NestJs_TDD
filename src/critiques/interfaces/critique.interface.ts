import { IArticle } from 'src/articles/interfaces/article.interface';
import { IUser } from 'src/users/interfaces/user.interface';

export interface ICritique {
  id: number;
  datePublished: Date;
  reviewerId: number;
  articleId: number;
  titleCritique: string;
  descriptionCritique: string;
  article: IArticle;
  reviewer: IUser;
}
