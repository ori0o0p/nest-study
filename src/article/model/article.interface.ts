import { Document } from 'mongoose';

export interface IsArticle extends Document {
  readonly title: string;
  readonly content: string;
}
