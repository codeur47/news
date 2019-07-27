import { Article } from './article';

export interface GlobalArticle {
  statut: string;
  totalArticle: number;
  Article: Article[];
}
