import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IsArticle } from './model/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticleRepository {
  constructor(@InjectModel('Article') private articleModel: Model<IsArticle>) {}

  async create(createArticleDto: CreateArticleDto): Promise<IsArticle> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }

  async findAll(): Promise<IsArticle[]> {
    return this.articleModel.find().exec();
  }

  async findOne(id: string): Promise<IsArticle> {
    return this.articleModel.findById(id).exec();
  }
}
