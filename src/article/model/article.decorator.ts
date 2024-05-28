import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Article {
  @Prop()
  title: string;
  @Prop()
  content: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
