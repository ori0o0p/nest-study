import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Article {
  @Prop()
  title: string;
  @Prop()
  content: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article)