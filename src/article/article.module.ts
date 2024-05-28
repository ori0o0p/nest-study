import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { ArticleRepository } from './article.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from './model/article.decorator';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/article'),
    MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService, ArticleRepository],
})
export class ArticleModule {}
